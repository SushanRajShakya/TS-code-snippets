import { AuthPagesLabels } from './enum'
import { getBannerUrl } from './UtilFunctions'
import { FieldTypeBanner } from './Types'

const notFound = {
  title: 'ERROR 404!',
  subTitle: 'OPS! PAGE NOT FOUND',
  detail: 'Sorry, the page you are looking for does not exist. If you think something is broken report a problem.',
  redirection: {
    url: '/',
    displayName: 'RETURN HOME'
  },
  problemUrl: {
    url: '/',
    displayName: 'REPORT PROBLEM'
  }
}

const navigationDisplayNames = {
  DASHBOARD: 'Dashboard',
  VEHICLE: 'Vehicle',
  PACKAGE: 'Package',
  TIME_SCHEDULE: 'Time & Schedule',
  BOOKING: 'Booking',
  COMPANY: 'Company'
}

const labels = {
  [AuthPagesLabels.EMAIL]: {
    topic: 'Trouble Logging In?',
    description: 'Enter your email and we\'ll send you an otp to get back into your account.',
    pageTitle: 'TBD | Trouble Login | Email'
  },
  [AuthPagesLabels.OTP]: {
    topic: 'OTP Code',
    description: 'Enter the OTP code sent to ',
    pageTitle: 'TBD | Trouble Login | OTP',
  },
  [AuthPagesLabels.PASSWORD]: {
    topic: 'Trouble Logging In?',
    description: 'Enter new password for you account.',
    pageTitle: 'TBD | Trouble Login | Password'
  },
  [AuthPagesLabels.LOGIN]: {
    topic: 'Log In',
    description: 'For the purpose of company regulation, your details are required.',
    pageTitle: 'TBD | Log In'
  },
  [AuthPagesLabels.USERTYPE]: {
    topic: 'Register',
    description: 'Sign up as a',
    pageTitle: 'TBD | Register'
  },
  [AuthPagesLabels.SELECT_USER_TYPE]: {
    topic: 'Select User Type',
    description: 'Sign up as a',
    pageTitle: 'TBD | Register'
  },
  [AuthPagesLabels.REGISTER]: {
    topic: 'Register',
    description: 'For the purpose of company regulation, your details are required.',
    pageTitle: 'TBD | Register'
  },
  [AuthPagesLabels.VERIFY_USER]: {
    topic: 'Verifying User',
    description: 'To continue viewing secured pages, \n Please enter the OTP Code sent to ',
    pageTitle: 'TBD | Verifying User'
  },
  [AuthPagesLabels.CONFIRM_USER]: {
    topic: 'Confirm User',
    description: 'Please enter your email address to confirm.',
    pageTitle: 'TBD | Confirm User'
  },
}

const accountSettingsLabels = {
  deleteAccount: {
    title: 'Delete Account',
    description: 'If you delete your account, your personal information will be wiped from Coursera\'s servers, all of your course activity will be anonymized and any certificates earned will be deleted. This action cannot be undone! Cancel any active subscriptions before you delete your account.',
    buttonLabel: 'Delete Account',
  },
  hideAccount: {
    title: 'Hide my Profile',
    description: 'If you delete your account, your personal information will be wiped from Coursera\'s servers, all of your course activity will be anonymized and any certificates earned will be deleted. This action cannot be undone! Cancel any active subscriptions before you delete your account.',
    buttonLabel: 'Hide Profile',
  }
}

const BANNER_IMAGES = ['learnToDriveOne.jpg', 'learnToDriveTwo.png', 'learnToDriveThree.jpg', 'learnToDriveFour.jpg']

const homepageBannerList:FieldTypeBanner[] = [
  {
    title: 'Learn to Drive with us',
    description: 'Welcome to our LTD family, we provide a platform to enjoy services on learning to drive.',
    imageUrl: getBannerUrl(BANNER_IMAGES[0])
  },
  {
    title: ' Online learner & trainer platform',
    description: 'LTD provides a platform where the learner can connect with any member institutes and vice versa.',
    imageUrl: getBannerUrl(BANNER_IMAGES[1]),
  },
  {
    title: 'Home of the best institutes',
    description: 'LTD lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    imageUrl: getBannerUrl(BANNER_IMAGES[2]),
  },
  {
    title: 'Your community, your online trainer',
    description: 'LTD lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    imageUrl: getBannerUrl(BANNER_IMAGES[3]),
  },
]

const imageUrlForStaticData = {
  about: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/about.png`,
  aimObjective: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/aimObjective.png`,
  company: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/drivingSchool.jpg`,
  customer: `http://localhost:${process.env.REACT_APP_PORT}/fallbackFiles/learner.jpg`,
}

const homepageStaticData = {
  company: {
    title: 'Be our instructor',
    description: 'You can register you self as a company and add you packages to get customers. lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.',
    imageUrl: imageUrlForStaticData.company,
    dataLabel: 'Total companies: '
  },
  customer: {
    title: 'Be our learner',
    description: 'You can register you self as a learner and get yourself a package that suits you best to get most of it. lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.',
    imageUrl: imageUrlForStaticData.customer,
    dataLabel: 'Total learners: '
  },
  aimObjective: {
    title: 'Aim & Objectives',
    description: 'The platform was built to bring learner and training institute together in easier way possible. lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.',
    imageUrl: imageUrlForStaticData.aimObjective,
    dataLabel: 'Total Packages: '
  },
  about: {
    title: 'About LTD',
    description: 'The company was formed by Prazwal Malakar having a wider vision. lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum.',
    imageUrl: imageUrlForStaticData.about,
    dataLabel: 'Total team: '
  }
}

export { navigationDisplayNames, notFound, labels, accountSettingsLabels, homepageBannerList, homepageStaticData }
