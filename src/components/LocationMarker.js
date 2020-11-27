import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import terrainIcon from '@iconify/icons-mdi/terrain';
import triangleIcon from '@iconify/icons-mdi/triangle';
import cycloneIcon from '@iconify/icons-mdi/weather-hurricane';

const iconTypes = {
  8: {
    icon: fireIcon,
    class: "fire-icon"
  },
  12: {
    icon: terrainIcon,
    class: "volcano-icon"
  },
  15: {
    icon: triangleIcon,
    class: "iceberg-icon"
  },
  10: {
    icon: cycloneIcon,
    class: "storm-icon"
  },
}

const LocationMarker = ({ lat, lng, id, onClick }) => {
  return (
    <div className={iconTypes[id.class]} onClick={onClick}>
      <Icon 
        icon={iconTypes[id].icon} 
        className={iconTypes[id].class}
      />
    </div>
  )
}

export default LocationMarker
