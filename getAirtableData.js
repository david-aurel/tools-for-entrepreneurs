const fs = require('fs')
require('dotenv').config()

const getAirtableData = async () => {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = 'Table 1'

  const Airtable = require('airtable')
  const base = new Airtable({ apiKey }).base(baseId)

  const tools = {}
  const categories = ['Featured']
  const paths = {}
  const featured = []

  return new Promise((resolve, reject) => {
    base(tableName)
      .select({
        view: 'Grid view',
        maxRecords: 99999,
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach((record, index) => {
          const name = record.fields['Product Name']
          const formattedName =
            name && name.toLowerCase().replace(' ', '-').replace('.', '-')

          const Category = record && record.fields && record.fields.Category

          if (Category) {
            Category.forEach((category) => {
              // populate tools
              if (tools[category]) {
                tools[category].push(record.fields)
              } else {
                tools[category] = [record.fields]
              }

              // populate categories
              if (!categories.includes(category)) categories.push(category)
            })
            // populate paths
            if (formattedName) paths[formattedName] = record.fields

            // populate featured
            // if (record && record.fields && record.fields.Featured)
            //   featured.push(record.fields)
          }
        })

        fetchNextPage()
      })
      .catch((error) => {
        console.log(error)
        if (error) return reject(error)
      })
      .then(() => {
        return resolve({ tools, categories, paths, featured })
      })
  })
}

getAirtableData()
  .catch((err) => console.log('airtable error:', err))
  .then((data) =>
    fs.writeFileSync(`${__dirname}/airtableData.json`, JSON.stringify(data))
  )
