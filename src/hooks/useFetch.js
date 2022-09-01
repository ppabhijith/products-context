import axios from 'axios'
import { useEffect, useState, useLayoutEffect } from 'react'

export default function useFetch(option) {
    const [data, setData] = useState(0)
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get(option)
            .then((resp) => {
                setData(resp.data)
                setLoaded(true)
                console.log(resp.data)
            }
            )
    }, [option])
    return (
        { data, isLoaded }
    )
}
