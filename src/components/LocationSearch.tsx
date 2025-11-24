import type { Place } from "../api/Place";
import { useState } from 'react'

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
    const [places, setPlaces] = useState<Place[]>([])
  return (
    <div>
        <form>
            <label className="font-bold" htmlFor="term">
                Search
            </label>
            <input 
            className="border border-gray-300 rounded-md shadow-sm foucs:border-indigo-500 px-4 py-2 w-full">
            </input>
        </form>
    </div>
  )
}
