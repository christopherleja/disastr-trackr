import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationDetails from './LocationInfo'
import LocationMarker from './LocationMarker'
import Header from './Header'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(event => {
    
    const type = event.categories[0].id
    const valid = type === 8 || type === 10 || type === 15 || type === 12

    const coords = event.geometries[event.geometries.length - 1].coordinates
    if (coords.length === 2 && !event.closed)
      return <LocationMarker 
      key={event.id}
      id={type}
      lat={coords[1]} 
      lng={coords[0]}  
      onClick={() => {
        setLocationInfo({ 
          id: event.id, 
          title: event.title
        })
      }}
      />
  })


  return (
    <div className="map">
      <Header />
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
        { locationInfo && 
          <LocationDetails info={locationInfo}
        />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map
