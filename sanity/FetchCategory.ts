import { client } from './lib/client'

export async function FetchMale() {
    const data = await client.fetch(`*[_type == "product" && category == "male"]`)
    return data
}
export async function FetchFemale() {
    const data = await client.fetch(`*[_type == "product" && category == "female"]`)
    return data
}
export async function FetchKids() {
    const data = await client.fetch(`*[_type == "product" && category == "kids"]`)
    return data
}

