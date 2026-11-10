const HistoryTrainingPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const {id} = await params
  return (
    <div>HistoryTrainingPage</div>
  )
}

export default HistoryTrainingPage