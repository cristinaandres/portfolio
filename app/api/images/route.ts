import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'showcase';

    const imagesDirectory = path.join(process.cwd(), `public/images/activities/animal-crossing/showcase`);
    const filenames = fs.readdirSync(imagesDirectory);

    const imageFiles = filenames.filter((filename) => /\.(jpg|jpeg|png|gif)$/i.test(filename));

    return NextResponse.json(imageFiles)
}
