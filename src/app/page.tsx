"use client"
import ImageUploadForm from "@/components/ImageUploadForm";
import Results from "@/components/Results";
import {useState} from "react";

export type Category = {
  category: string,
  rating: number,
  comments: string,
}

export type WatchDetails = {
  name: string,
  details: string,
  results: Category[]
}

export default function Home() {
  const [watchDetails, setWatchDetails] = useState<WatchDetails | null>(null)


  return (
    <div>
      <ImageUploadForm setWatchDetails={setWatchDetails}/>
      <Results watchDetails={watchDetails} />
    </div>
  );
}
