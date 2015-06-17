App.info({
  id: 'com.domain.application',
  name: 'Name',
  version: 0.0.1,
  website: 'domain.com'
});

App.icons({
    iphone:        'resources/Icon/iphone.png',
    iphone_2x:     'resources/Icon/iphone_2x.png',
    iphone_3x:     'resources/Icon/iphone_3x.png',
    ipad:          'resources/Icon/android_hdpi.png',
    ipad_2x:       'resources/Icon/ipad_2x.png',
    android_ldpi:  'resources/Icon/android_ldpi.png',
    android_mdpi:  'resources/Icon/android_mdpi.png',
    android_hdpi:  'resources/Icon/android_hdpi.png',
    android_xhdpi: 'resources/Icon/android_xhdpi.png'
})

App.launchScreens({
    iphone:                  'resources/SplashScreen/iphone.png',
    iphone_2x:               'resources/SplashScreen/iphone_2x.png',
    iphone5:                 'resources/SplashScreen/iphone5.png',
    iphone6:                 'resources/SplashScreen/iphone6.png',
    iphone6p_portrait:       'resources/SplashScreen/iphone6p_portrait.png',
    iphone6p_landscape:      'resources/SplashScreen/iphone6p_portrait.png',
    ipad_portrait:           'resources/SplashScreen/ipad_portrait.png',
    ipad_portrait_2x:        'resources/SplashScreen/ipad_portrait_2x.png',
    ipad_landscape:          'resources/SplashScreen/ipad_landscape.png',
    ipad_landscape_2x:       'resources/SplashScreen/ipad_landscape_2x.png',
    android_ldpi_portrait:   'resources/SplashScreen/android_ldpi_portrait.png',
    android_ldpi_landscape:  'resources/SplashScreen/android_ldpi_landscape.png',
    android_mdpi_portrait:   'resources/SplashScreen/android_mdpi_portrait.png',
    android_mdpi_landscape:  'resources/SplashScreen/android_mdpi_landscape.png',
    android_hdpi_portrait:   'resources/SplashScreen/android_hdpi_portrait.png',
    android_hdpi_landscape:  'resources/SplashScreen/android_hdpi_landscape.png',
    android_xhdpi_portrait:  'resources/SplashScreen/android_xhdpi_portrait.png',
    android_xhdpi_landscape: 'resources/SplashScreen/android_xhdpi_landscape.png'
});
// allow cross origin
App.accessRule('*');