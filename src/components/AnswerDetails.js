const AnswerDetails = ({ body, author, created_at }) => {
  return (
    <div>
      <p>{body}</p>
      <p>By {author.first_name} {author.last_name}</p>
      <p>
        <strong>Created at:</strong> {new Date(created_at).toLocaleString()}
      </p>
    </div>
  )
}

export default AnswerDetails