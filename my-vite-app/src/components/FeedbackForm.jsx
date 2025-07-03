import { useState } from "react";
import {Input} from "@/components/ui/input";
// import {Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { Button } from "./ui/button";


export default function FeedbackForm ({onAdd}){
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const {rating, setRating} = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()|| !rating.trim()) return;

        onAdd({name, comment, rating});

        setName("");
        setComment("");
        setRating("");
    };
    return(
        <form className="space-y-4 bg-amber-100" onSubmit={handleSubmit}>
            <Input 
                placeholder="Task manager .........." 
                value ={name}
                onChange = {e => setName(e.target.value)}
            />
            <Textarea 
                placeholder="Enter your Feedbak hire"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <Input 
                placeholder = "Rating (1-10)"
                type="number"
                value={rating}
                onChange= {e => setRating(e.target.value)}
            />
            <Button type="submit">Submit Feedback</Button>
        </form>
    )
}