import feedbackItem from "@/components/FeedbackItem";

export default function FeedbackList ({feedbacks, onDelete}){
    if (feedbacks.length === 0){
        return <p className="text-grey-500">No feedback submitted </p>
    }
    return(
        <div className="space-y-4">
            {feedbacks.map ((f,i)=> (
                <feedbackItem 
                    key={i}
                    index={i}
                    feedback={f}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}