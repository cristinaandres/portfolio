import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const imageMap = {
    'animal-crossing': ['animal_crossing01.jpeg', 'animal_crossing02.jpeg', 'animal_crossing03.jpeg', 'animal_crossing04.jpeg', 'animal_crossing05.jpeg', 'animal_crossing06.jpeg', 'animal_crossing07.jpeg'],
    'blender': [],
};

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'showcase';

    if (!imageMap[folder]) {
        return new Response('Carpeta no encontrada', { status: 404 });
    }

    const imageUrls = imageMap[folder].map((filename) => ({
        src: `/images/activities/${folder}/showcase/${filename}`,
        width: 720,
        height: 405
    }));

    return new Response(JSON.stringify({ images: imageUrls }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
