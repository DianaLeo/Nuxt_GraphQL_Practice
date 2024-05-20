#!/usr/bin/env bun
/// <reference path="../../.nuxt/types/schema.d.ts" />

import process from "node:process"
import { readFile } from "fs/promises"

// Function to read the .env file and set environment variables
async function setEnvVariables() {
    try {
        const envFilePath = "./.env"
        const envContent = await readFile(envFilePath, "utf-8")
        const lines = envContent.split("\n")

        for (const line of lines) {
            const keyValue = line.match(
                /^(AWS_ACCESS_KEY_ID|AWS_SECRET_ACCESS_KEY)=(.*)$/,
            )
            if (keyValue) {
                const [_, key, value] = keyValue
                process.env[key] = value
                console.info(
                    `${key} has been set to environment variables ${value}`,
                )
            }
        }
    } catch (error) {
        console.error("Error reading or processing .env file:", error)
    }
}

// Execute the function to set environment variables
await setEnvVariables()
