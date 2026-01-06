"use client";

import { Button } from "@/components/ui/Button";
import { FolderOpen } from "lucide-react";

interface GoogleDriveLinkProps {
    link: string;
}

export function GoogleDriveLink({ link }: GoogleDriveLinkProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center my-16">
            <h3 className="text-2xl font-display font-bold mb-4">Detailed Design Artifacts</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Due to NDA restrictions, full high-fidelity mockups, research decks, and unredacted flows are available securely via Google Drive.
            </p>
            <Button size="lg" href={link} target="_blank" className="bg-blue-600 text-white hover:bg-blue-700 hover:opacity-100 font-semibold px-8 h-14">
                <FolderOpen className="mr-2 w-5 h-5" />
                View Full Case Study on Google Drive
            </Button>
        </div>
    );
}
