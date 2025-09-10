import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET(
    req: Request,
    { params }: { params: Promise<{ file: string[] }> }
) {
    const { file } = await params
    const filePath = path.join(process.cwd(), 'public', 'files', 'pdf', ...file)

    try {
        const fileBuffer = fs.readFileSync(filePath)
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
    } catch (err) {
        console.log(err)
        return new NextResponse('File not found', { status: 404 })
    }
}
