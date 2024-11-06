"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  email: string;
  name: string;
  body: string;
}

export function fetchReviews() {
  return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((response) => response.json())
    .then((data) => data as Review[]);
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, []);

  return { reviews, loading };
}

export function CommentModal() {
  const { reviews, loading } = useReviews();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Reviews</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Reviews</DialogTitle>
          <DialogDescription>a</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        <div>
          {loading ? (
            <p>Loading reviews...</p>
          ) : (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  {review.body}
                  <br />
                  <small>by {review.name}</small>
                </li>
                
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommentModal;
