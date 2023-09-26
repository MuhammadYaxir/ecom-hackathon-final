import { client } from './lib/client'

export default async function FetchData() {
    const data = await client.fetch(`*[_type == "product"]`)
    // const dataCategory = await client.fetch(`*[_type == "category"]`)

    // console.log(data);
    return data
}

