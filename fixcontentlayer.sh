#!/bin/bash

# Function to replace a line with another line in a file
replace_line() {
    file="$1"
    search_line="$2"
    replace_line="$3"
    sed -i "s|${search_line}|${replace_line}|" "$file"
}

# Edit ./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs
replace_line "./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs" \
    "import { ConsoleSpanExporter, SimpleSpanProcessor } from \"@opentelemetry/sdk-trace-base\";" \
    "import * as A from \"@opentelemetry/sdk-trace-base\";"

replace_line "./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs" \
    "export const LiveConsoleSimple = /*#__PURE__*/SimpleProcessor( /*#__PURE__*/M.succeedWith(() => new ConsoleSpanExporter()));" \
    "export const LiveConsoleSimple = /*#__PURE__*/SimpleProcessor( /*#__PURE__*/M.succeedWith(() => new A.ConsoleSpanExporter()));"

replace_line "./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs" \
    "export const SimpleProcessorTag = /*#__PURE__*/tag(SimpleProcessorSymbol);" \
    "export const SimpleProcessorTag = /*#__PURE__*/tag(A.SimpleProcessorSymbol);"

# Edit ./node_modules/@effect-ts/otel-sdk-trace-node/_mjs/index.mjs
replace_line "./node_modules/@effect-ts/otel-sdk-trace-node/_mjs/index.mjs" \
    "import { NodeTracerProvider } from \"@opentelemetry/sdk-trace-node\";" \
    "import NodeTracerProvider from \"@opentelemetry/sdk-trace-node\";"

# Edit ./node_modules/@contentlayer/utils/dist/tracing-effect/index.js
replace_line "./node_modules/@contentlayer/utils/dist/tracing-effect/index.js" \
    "import { Resource } from '@opentelemetry/resources';" \
    "import Resource from '@opentelemetry/resources';"

replace_line "./node_modules/@contentlayer/utils/dist/tracing-effect/index.js" \
    "import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';" \
    "import SemanticResourceAttributes from '@opentelemetry/semantic-conventions';"