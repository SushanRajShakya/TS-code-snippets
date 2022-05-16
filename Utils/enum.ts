export enum ScreenSizes {
    MOBILE = 640,
    TABLET = 768,
    LARGE_TABLET = 1024,
    DESKTOP = 1280,
    LARGE_DESKTOP = 1440,
}

export enum ThemeType {
    DARK    = 'dark',
    LIGHT   = 'light',
}

export enum AuthPagesLabels {
    EMAIL = 'email',
    OTP = 'otp',
    PASSWORD = 'password',
    LOGIN = 'login',
    REGISTER = 'register',
    USERTYPE = 'usertype',
    VERIFY_USER = 'verifyUser',
    CONFIRM_USER = 'confirmUser',
    SELECT_USER_TYPE = 'selectUserType'
}

export enum LocalStorageKeys {
    RESET_STATE = 'rsi',
    LOGIN_FIELD = 'lfs',
    CONFIRM_USER = 'cfu',
    OTP_ACTIVATE_TIME = 'oat',
}

export enum Category {
    COMPANY='COMPANY',
    CUSTOMER='CUSTOMER'
}

export enum UserAccountStatus {
    ACTIVE='ACTIVE',
    DE_ACTIVE='DE_ACTIVE'
}

export enum RequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    DECLINED = 'declined',
}

export enum ClassNameScrollBar {
    Y = 'hasYScrollBar',
    X = 'hasXScrollBar'
}

export enum SvgIconName {
    ANSWER_CARD_ICON = 'answerCardIcon',
    ARROW_RIGHT = 'arrowRight',
    ANSWER_SELECTED = 'answerSelected',
    COPY='copy',
    SEARCH = 'search',
    ANGLE_DOWN = 'angleDown',
    BELL_WITH_DOT = 'bellWithDot',
    EYE= 'eye',
    EYE_SLASH= 'eyeSlash',
    STAR_GOLD = 'starGold',
    USER = 'user',
    CALENDAR = 'calendar',
    SHARE = 'share',
    HEART_OUTLINE = 'heartOutline',
    CLOCK = 'clock',
    FACEBOOK_WHITE = 'facebookWhite',
    TWITTER_WHITE = 'twitterWhite',
    FACEBOOK_LOGO = 'facebookLogo',
    LINKEDIN_LOGO = 'linkedInLogo',
    INSTAGRAM = 'instagram',
    PENCIL = 'pencil',
    USER_SEAT_BELT = 'userSeatBelt',
    BLOOD_DROP = 'bloodDrop',
    AMBULANCE = 'ambulance',
    DOCTOR = 'doctor',
    TICK_MARK = 'tickMark',
    DASH_MARK = 'dashMark',
    CROSS_MARK = 'crossMark',
    STUDENT = 'student',
    SCHOOL = 'school'
}

export enum UserOperations {
    REGISTER='REGISTER',
    FORGOT_PASSWORD='FORGOT_PASSWORD',
    RESET_PASSWORD='RESET_PASSWORD',
    DEACTIVATION='DEACTIVATION',
    REACTIVATION='REACTIVATION',
}

export enum FallBackImage {
    PACKAGE= 'PACKAGE',
    VEHICLE= 'VEHICLE',
    COMPANY= 'COMPANY',
    USER= 'USER'
}

export enum AnimateContainerVariant {
    HIDDEN = 'hidden',
    VISIBLE = 'visible',
    EXIT = 'exit'
}

export enum UserGender {
    MALE='MALE',
    FEMALE='FEMALE',
    OTHERS='OTHERS',
}
