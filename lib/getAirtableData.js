export const getAirtableData = async (props) => {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = 'Tools'

  const Airtable = require('airtable')
  const base = new Airtable({ apiKey }).base(baseId)

  const tools = []
  const categories = []
  const paths = []

  return new Promise((resolve, reject) => {
    base(tableName)
      .select({
        view: 'Grid view',
        maxRecords: 99999,
      })
      .eachPage(function page(records, fetchNextPage) {
        if (props?.onlyPaths) {
          records.forEach((record) => {
            paths.push(record.fields.Name)
          })
        } else {
          records.forEach((record) => {
            // populate tools
            tools.push(record.fields)

            // populate categories
            record.fields.Category.forEach((category) => {
              if (categories.includes(category)) return
              categories.push(category)
            })
          })
        }
        fetchNextPage()
      })
      .catch((error) => {
        if (error) return reject(error)
      })
      .then(() => {
        return resolve({ tools, categories, paths })
      })
  })
}
