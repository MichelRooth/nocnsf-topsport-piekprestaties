"""Block Codex tool calls that directly target data/Private."""

import json
import re
import sys


PRIVATE_PATH = re.compile(r"(?i)(?:^|[^a-z0-9_.-])data[\\/]+private(?:[\\/]|$|[^a-z0-9_.-])")
PRIVATE_JOIN = re.compile(r"(?i)\b(?:join-path|joinpath)\b.{0,80}\bdata\b.{0,80}\bprivate\b")


def strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for nested in value.values():
            yield from strings(nested)
    elif isinstance(value, list):
        for nested in value:
            yield from strings(nested)


def response(deny, reason=""):
    if not deny:
        return {}
    return {
        "hookSpecificOutput": {
            "hookEventName": "PreToolUse",
            "permissionDecision": "deny",
            "permissionDecisionReason": reason,
        }
    }


def main():
    try:
        event = json.load(sys.stdin)
        tool_input = "\n".join(strings(event.get("tool_input", {})))
    except Exception:
        print(json.dumps(response(True, "Private-controle kon de toolaanroep niet veilig controleren.")))
        return

    blocked = PRIVATE_PATH.search(tool_input) or PRIVATE_JOIN.search(tool_input)
    if blocked:
        print(json.dumps(response(True, "Toegang geblokkeerd: data/Private mag niet worden geopend of bewerkt.")))
    else:
        print("{}")


if __name__ == "__main__":
    main()
