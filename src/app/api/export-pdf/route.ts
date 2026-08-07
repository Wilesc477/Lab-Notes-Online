/*
Internal API route for exporting Lab Notebook as PDF
*/
import puppeteer from 'puppeteer'

export async function POST(req: Request) {
    const { html } = await req.json()
    const browser = await puppeteer.launch({
        headless: true,
    })
    const page = await browser.newPage()

    await page.setContent(`
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial;
                        padding: 40px;
                    }
                    .prose {
                        max-width: 816px;
                        height: auto !important;
                        overflow: visible !important;
                    }
                </style>
            </head>
            <body>
                ${html}
            </body>
        </html>
        `)
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
    })

    await browser.close()

    return new Response(pdf, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="notebook.pdf"',
        },
    })
}