const MessageCard = ({ name, date, message }: { name: string; date: string; message: string }) => {
  return (
    <div className="bg-cream rounded-2xl p-4 shadow-sm border border-terracotta/15">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-terracotta">{name}</h3>
        <span className="text-xs text-charcoal/70">{date}</span>
      </div>
      <p className="message-text text-charcoal mt-2">{message}</p>
    </div>
  )
}

export default MessageCard
