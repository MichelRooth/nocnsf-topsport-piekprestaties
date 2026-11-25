$ErrorActionPreference = "Stop"

function Get-StringValues($value) {
  if ($null -eq $value) { return }
  if ($value -is [string]) {
    $value
    return
  }
  if ($value -is [System.Collections.IDictionary]) {
    foreach ($item in $value.Values) { Get-StringValues $item }
    return
  }
  if ($value -is [System.Collections.IEnumerable]) {
    foreach ($item in $value) { Get-StringValues $item }
    return
  }
  if ($value -is [pscustomobject]) {
    foreach ($property in $value.PSObject.Properties) { Get-StringValues $property.Value }
  }
}

try {
  $hookInput = [Console]::In.ReadToEnd() | ConvertFrom-Json
  $toolInput = (Get-StringValues $hookInput.tool_input) -join "`n"
  $privatePath = '(?i)(?:^|[^a-z0-9_.-])data[\\/]+private(?:[\\/]|$|[^a-z0-9_.-])'
  $privateJoin = '(?i)\b(?:join-path|joinpath)\b.{0,80}\bdata\b.{0,80}\bprivate\b'

  if ($toolInput -match $privatePath -or $toolInput -match $privateJoin) {
    @{ hookSpecificOutput = @{
        hookEventName = "PreToolUse"
        permissionDecision = "deny"
        permissionDecisionReason = "Toegang geblokkeerd: data/Private mag niet worden geopend of bewerkt."
      }
    } | ConvertTo-Json -Depth 5 -Compress | Write-Output
  }
  else {
    "{}" | Write-Output
  }
}
catch {
  @{ hookSpecificOutput = @{
      hookEventName = "PreToolUse"
      permissionDecision = "deny"
      permissionDecisionReason = "Toegang geblokkeerd: de Private-controle kon de toolaanroep niet veilig controleren."
    }
  } | ConvertTo-Json -Depth 5 -Compress | Write-Output
}
