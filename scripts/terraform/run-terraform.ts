#!/usr/bin/env bun
import { $ } from "bun"
import { access } from "fs/promises"
import { constants } from "fs"

// Function to check if a file or directory exists
async function pathExists(path: string, type: "file" | "dir") {
    try {
        const checkType = type === "file" ? constants.F_OK : constants.R_OK
        await access(path, checkType)
        return true
    } catch {
        return false
    }
}

// Main function to execute the required commands
async function main() {
    const terraformFolderExists = await pathExists(
        "terraform/.terraform",
        "dir",
    )
    const terraformStateExists = await pathExists(
        "terraform/terraform.tfstate",
        "file",
    )

    // If .terraform folder and terraform.tfstate file do not exist, run terraform init
    if (!terraformFolderExists || !terraformStateExists) {
        console.info("executing 'terraform init'...")
        await $`cd terraform && terraform init -reconfigure`
    }

    // Run read-env.ts script
    console.info("executing 'read-env.ts'...")
    await $`bun run scripts/terraform/read-env.ts`

    // Run terraform plan command
    console.info("executing 'terraform plan'...")
    await $`cd terraform && terraform plan`
}

main().catch(console.error)
