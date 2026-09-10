import AutoStories from '@mui/icons-material/AutoStoriesOutlined'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import Album from '@mui/icons-material/AlbumOutlined'
import GraphicEq from '@mui/icons-material/GraphicEq'
import MedicalServices from '@mui/icons-material/MedicalServicesOutlined'
import FormatQuote from '@mui/icons-material/FormatQuote'
import LocationOn from '@mui/icons-material/LocationOnOutlined'
import School from '@mui/icons-material/SchoolOutlined'
import Psychology from '@mui/icons-material/PsychologyOutlined'
import EmojiEvents from '@mui/icons-material/EmojiEventsOutlined'

const icons = {
  auto_stories: AutoStories,
  arrow_downward: ArrowDownward,
  album: Album,
  graphic_eq: GraphicEq,
  medical_services: MedicalServices,
  format_quote: FormatQuote,
  location_on: LocationOn,
  school: School,
  psychology: Psychology,
  emoji_events: EmojiEvents,
}

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Album
  return <Component fontSize="inherit" {...props} />
}
