"use server"
import path from "path";
import { promises as fs } from 'fs';
import { cache } from 'react'

export type CopyComponentState = {
    error: string;
    content: string;
    success: boolean;
}

const readFileCache = cache(async (filePath: string) => {
    return await fs.readFile(filePath, 'utf-8')
})

export const getComponent = async (filename: string | null, folder: string) => {
    const baseDir = path.join(process.cwd(), "components/snapiui");
    if (!filename || filename == "undefined") {
        const fullPath = path.join(baseDir, `${folder}.tsx`);
        return await readFileCache(fullPath)
    }
    const fullPath = path.join(baseDir, `${filename}.tsx`);
    return await readFileCache(fullPath)
}

export const copyComponent = async (prevState: CopyComponentState, formData: FormData) => {
    try {
        const folder = formData.get('folder') as string
        const filename = formData.get('filename') as string;

        if (!folder || !filename) {
            return {
                error: "Invalid file or folder name",
                content: "",
                success: false
            }
        }

        const content = await getComponent(
            filename as string, folder as string
        )

        if (!content) {
            return {
                error: "Invalid file or folder name",
                content: "",
                success: false
            }
        }

        return {
            error: "",
            content,
            success: true
        }

    } catch (error) {
        console.log(error);

        return {
            error: "Failed to copy component",
            content: "",
            success: false
        }
    }
}