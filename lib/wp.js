import { useEffect } from 'react'
import WPAPI from 'wpapi'

const wp = new WPAPI({
    endpoint: 'https://linux98.ir/wp-json'
})

export default wp
