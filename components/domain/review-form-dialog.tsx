"use client";

import { useState } from "react";
import { toast } from "sonner";

import type { Review } from "@/lib/types";
import { addReview, validateReviewInput } from "@/lib/reviews";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ratingOptions = [1, 2, 3, 4, 5];

type ReviewFormDialogProps = {
  destinationSlug: string;
  onReviewCreated: (review: Review) => void;
};

export function ReviewFormDialog({
  destinationSlug,
  onReviewCreated,
}: ReviewFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("5");

  const resetForm = () => {
    setAuthorName("");
    setTitle("");
    setBody("");
    setRating("5");
  };

  const handleSubmit = () => {
    const parsedRating = Number(rating);
    const validationError = validateReviewInput({
      authorName,
      title,
      body,
      rating: parsedRating,
    });

    if (validationError) {
      toast.error(validationError);
      return;
    }

    const review: Review = {
      id: crypto.randomUUID(),
      destinationSlug,
      authorName: authorName.trim(),
      rating: parsedRating,
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    };

    addReview(review);
    onReviewCreated(review);
    toast.success("Review submitted. Thank you for sharing your experience.");
    resetForm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-neutral-950 text-white hover:bg-neutral-800">
          Write a review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Share your experience</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Name
            </label>
            <Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Rating
            </label>
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger aria-label="Select rating">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {ratingOptions.map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value} stars
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Title
            </label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Review
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={4}
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full bg-neutral-950 text-white">
            Submit review
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
