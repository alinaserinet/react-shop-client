function PageTitle({ title: pageTitle }) {
  return (
    <div className="bg-blue-50 py-10">
      <div className="container">
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  )
}

export default PageTitle
