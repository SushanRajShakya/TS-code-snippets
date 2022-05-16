import { navigationDisplayNames } from './en'
import { companyRouteUrl, learnerRouteUrl, profileRouteUrl, publicRouteUrl, routeUrl } from '../Routing/Constant'
import { AnimateContainerVariant, FallBackImage } from './enum'

const COMPANY_DETAILS = {
  title: 'Learn To Drive App' ,
  name: 'Learn To Drive Nepal',
  shortForm: 'LTD',
  location: 'Kathmandu, Nepal',
  number: '+977-9812345678',
  logo: '',
  copyRight: 'Copyright 2021. All Rights reserved.',
}

const NAVIGATIONS_COMPANY = [
  {
    url: routeUrl.DASHBOARD,
    displayName: navigationDisplayNames.DASHBOARD,
  },
  {
    url: routeUrl.VEHICLE,
    displayName: navigationDisplayNames.VEHICLE,
  },
  {
    url: routeUrl.PACKAGE,
    displayName: navigationDisplayNames.PACKAGE,
  },
  {
    url: companyRouteUrl.booking.LIST,
    displayName: navigationDisplayNames.BOOKING,
  }
]

const NAVIGATIONS_LEARNER = [
  {
    url: learnerRouteUrl.booking.LIST,
    displayName: navigationDisplayNames.BOOKING,
  }
]

const NAVIGATIONS_PUBLIC = [
  {
    url: publicRouteUrl.package.LIST,
    displayName: navigationDisplayNames.PACKAGE,
  },
  {
    url: publicRouteUrl.company.LIST,
    displayName: navigationDisplayNames.COMPANY,
  }
]

const VEHICLE_TAB_LIST = [
  { label: 'List', hrefUrl: companyRouteUrl.vehicle.LIST },
  { label: 'Add', hrefUrl: companyRouteUrl.vehicle.ADD },
]

const PROFILE_TAB_LIST = [
  { label: 'Details', hrefUrl: profileRouteUrl.DETAILS },
  { label: 'Account Settings', hrefUrl: profileRouteUrl.ACCOUNT_SETTINGS },
]

const PACKAGE_TAB_LIST = (isUpdate = false) => [
  { label: 'List', hrefUrl: companyRouteUrl.package.LIST },
  !isUpdate
    ? { label: 'New', hrefUrl: companyRouteUrl.package.ADD }
    : { label: 'Update', hrefUrl: companyRouteUrl.package.UPDATE },
]

const fallBackImages = {
  [FallBackImage.PACKAGE]: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/package.jpeg`,
  [FallBackImage.VEHICLE]: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/vehicle.png`,
  [FallBackImage.COMPANY]: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/company.jpg`,
  [FallBackImage.USER]: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/user.png`,
}

const BRAND_LIST_BIKE = [
  { value: 'aprilia', label: 'Aprilia' },
  { value: 'bajaj', label: 'Bajaj' },
  { value: 'benelli', label: 'Benelli' },
  { value: 'bmw', label: 'BMW' },
  { value: 'cfmoto', label: 'CF Moto' },
  { value: 'crossfire', label: 'Crossfire' },
  { value: 'ducati', label: 'Ducati' },
  { value: 'haojue', label: 'Haojue' },
  { value: 'hartford', label: 'Hartford' },
  { value: 'hero', label: 'Hero' },
  { value: 'honda', label: 'Honda' },
  { value: 'husqvarna', label: 'Husqvarna' },
  { value: 'italjet', label: 'Italjet' },
  { value: 'jawa', label: 'Jawa' },
  { value: 'kawasaki', label: 'Kawasaki' },
  { value: 'ktm', label: 'KTM' },
  { value: 'mahindra', label: 'Mahindra' },
  { value: 'mvagusta', label: 'MV Agusta' },
  { value: 'royalenfield', label: 'Royal Enfield' },
  { value: 'runner', label: 'Runner' },
  { value: 'suzuki', label: 'Suzuki' },
  { value: 'tvs', label: 'TVS' },
  { value: 'yamaha', label: 'Yamaha' },
  { value: 'yatri', label: 'Yatri' },
]

const BRAND_LIST_CAR = [
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'mahindra', label: 'Mahindra' },
  { value: 'marutisuzuki', label: 'Maruti Suzuki' },
  { value: 'mg', label: 'MG' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'kia', label: 'KIA' },
  { value: 'peugeot', label: 'Peugeot' },
  { value: 'renault', label: 'Renault' },
  { value: 'kkoda', label: 'Skoda' },
  { value: 'ssangYong', label: 'SsangYong Motor' },
  { value: 'tata', label: 'TATA' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'volkswagen', label: 'Volkswagen' },
]


const animateContainerVariants = {
  toLeft: {
    [AnimateContainerVariant.HIDDEN]: {
      opacity: 0,
      x: '20vw',
    },
    [AnimateContainerVariant.VISIBLE]: {
      opacity: 1,
      x: '0',
      transition: { ease: 'easeOut' }
    },
    [AnimateContainerVariant.EXIT]: {
      x: '-100vw',
      opacity: 0,
      transition: { duration: 1 }
    }
  },
  toRight: {
    [AnimateContainerVariant.HIDDEN]: {
      opacity: 0,
      x: '-20vw',
    },
    [AnimateContainerVariant.VISIBLE]: {
      opacity: 1,
      x: '0',
      transition: { ease: 'easeOut' }
    },
    [AnimateContainerVariant.EXIT]: {
      x: '100vw',
      opacity: 0,
      transition: { duration: 1 }
    }
  },
  toTop: {
    [AnimateContainerVariant.HIDDEN]: {
      opacity: 0,
      y: '20vh',
    },
    [AnimateContainerVariant.VISIBLE]: {
      opacity: 1,
      y: '0',
      transition: { ease: 'easeOut' }
    },
    [AnimateContainerVariant.EXIT]: {
      y: '-100vh',
      opacity: 0,
      transition: { duration: 1 }
    }
  },
}

const landingPageFooter = {
  contactInfo: {
    displayName: 'Contact Info',
    navs: [
      { displayName: 'LTD', redirection: '/' },
      { displayName: 'Packages', redirection: publicRouteUrl.package.LIST },
      { displayName: 'Companies', redirection: publicRouteUrl.company.LIST },
    ]
  },
  about: {
    displayName: 'About',
    navs: [
      { displayName: 'Our Story', redirection: '/' },
      { displayName: 'Benefits', redirection: '/' },
      { displayName: 'Team', redirection: '/' },
      { displayName: 'Career', redirection: '/' },
    ]
  },
  help: {
    displayName: 'Help',
    navs: [
      { displayName: 'FAQs', redirection: '/faq' },
      { displayName: 'Contact Us', redirection: '/' },
    ]
  }
}

export {
  NAVIGATIONS_COMPANY,
  COMPANY_DETAILS,
  VEHICLE_TAB_LIST,
  BRAND_LIST_BIKE,
  BRAND_LIST_CAR,
  PACKAGE_TAB_LIST,
  NAVIGATIONS_LEARNER,
  NAVIGATIONS_PUBLIC,
  PROFILE_TAB_LIST,
  fallBackImages,
  animateContainerVariants,
  landingPageFooter
}
