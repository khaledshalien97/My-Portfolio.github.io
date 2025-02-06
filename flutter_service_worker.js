'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a59ec646a069c6788b7cbe738d06db00",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/RunnerTests/RunnerTests.swift": "6268cffb63d969b61f7b4e3005239256",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"macos/Runner/Configs/AppInfo.xcconfig": "680c0768c9f0be3cad2c30a9467f1991",
"macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"macos/Runner/AppDelegate.swift": "ce90ac27873ef28bc53a7dbc142459e5",
"macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"macos/Runner.xcodeproj/project.pbxproj": "9830b82937a194019bd7963fc1b564b2",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "50210e92f26cb9a59baa6a7f9e4cf34c",
"macos/Flutter/Flutter-Debug.xcconfig": "5699404db81f3897cb3d40ce86ee8a1c",
"macos/Flutter/GeneratedPluginRegistrant.swift": "0cbc5e5f66935049e5e160b81da87bfa",
"macos/Flutter/Flutter-Release.xcconfig": "d77c83fba1179be363f387359a9ed946",
"macos/Podfile": "19d897bd7231205aa401fb43db07713f",
"index.html": "be1b6af0b6f9c3bc84d20a5163dea56a",
"/": "be1b6af0b6f9c3bc84d20a5163dea56a",
"asset/images/flutter_logo.png": "1d407de8a3067a90f2f0d946e9c818e9",
"asset/images/projects_img/trip_app/trip_4.jpg": "aa8de67d3bd1e859fc4f9452dc0611ee",
"asset/images/projects_img/trip_app/trip_3.jpg": "732f6a94e2140634d4218e0556030346",
"asset/images/projects_img/trip_app/trip_2.jpg": "94903177c33a80be9135e13802050cd3",
"asset/images/projects_img/trip_app/trip_1.jpg": "954de1f1b9caadf22d2d0c3a17bd6d94",
"asset/images/projects_img/to_do_app/to_do_app_cover.png": "7366961c9c8e380b8b3b8f00ae85b270",
"asset/images/projects_img/to_do_app/to_do_app_1.png": "20d64b033bb4e08bfc04aaebfad69581",
"asset/images/projects_img/lifestyle_app/life_style_1.png": "8885bfaf533b362426363b358da7fcef",
"asset/images/projects_img/lifestyle_app/life_style_2.png": "88ed23fa35460d2479a3b7ac3f5b6252",
"asset/images/projects_img/lifestyle_app/lifestyle_app_cover.png": "f30c43b44c7ea0a8d16f2079ff4e2363",
"asset/images/projects_img/meal_app/meal_app_cover.jpg": "1899bbecfc162bb1331ffd94d9fb5a3e",
"asset/images/projects_img/travel_app/travel_1.jpeg": "22e8fc36406878e74243cfc6c3341adc",
"asset/images/projects_img/travel_app/travel_2.jpeg": "0d608d58510358041b9974bbf9927af7",
"asset/images/projects_img/travel_app/travel_app_cover.jpeg": "0337ccbcfc09c831981aa3e336c4c1fb",
"asset/images/projects_img/travel_app/travel_3.jpeg": "934e87f2c59056fa994a25c359861f0b",
"asset/images/projects_img/bmi_app/bmi_app_cover.png": "f4e7d3e8319b57653a90a3da1057e307",
"asset/images/projects_img/plant_app/screen_4.png": "e037f6c57d8980ab5d6c6c45545a9547",
"asset/images/projects_img/plant_app/screen_5.png": "4646b33c8905449547e23f3e5af203e1",
"asset/images/projects_img/plant_app/screen_7.png": "eccf233b75aac4892e6fee0b699c0cd6",
"asset/images/projects_img/plant_app/screen_6.png": "2fa677d380c80955aab6213c75c0e738",
"asset/images/projects_img/plant_app/screen_2.png": "8ecd830d50eab9d84d0f2f0378f7929b",
"asset/images/projects_img/plant_app/screen_3.png": "08441cba77d6536089cc3b3d801823a7",
"asset/images/projects_img/plant_app/screen_1.png": "0066ad55c53543c68c491ca9051c2046",
"asset/images/projects_img/plant_app/screen_11.png": "c324d60792adbfa8e91d93cf1e4a51ab",
"asset/images/projects_img/plant_app/screen_10.png": "b37c4e77a03b6536b7c29e5e590a9909",
"asset/images/projects_img/plant_app/screen_12.png": "fbeddd38cc4982ca7815ddbd4a86ce3b",
"asset/images/projects_img/plant_app/screen_13.png": "b3e8a30f0a760dda91c75147e096afa9",
"asset/images/projects_img/plant_app/screen_8.png": "15e78cfdc782f1c22b0f457350bcc9b4",
"asset/images/projects_img/plant_app/screen_9.png": "bc3ea883aa44da15b018b36aaa84082f",
"asset/images/projects_img/plant_app/cover_plant.png": "2ce7f204556e3617b461afb1b3cac45e",
"asset/images/projects_img/vertical_card_app/verical_center.png": "abb09b4aab57eee032a4db9a23e2e99d",
"asset/images/projects_img/vertical_card_app/vertical_right.png": "dffe6ce114c6c54e22440ac06507d361",
"asset/images/projects_img/vertical_card_app/vertical_left.png": "29f9b7e01015ccb1affc99761fbd3ccf",
"asset/images/projects_img/notes_app/notes_app_4.png": "0086aa8d80ca548ae64c4b3ccc47469d",
"asset/images/projects_img/notes_app/notes_app_1.png": "fcd7236c0f0d18e27b28dffdd14579e4",
"asset/images/projects_img/notes_app/notes_app_3.png": "8514adc2f2ea42ce27d8509ac296ee1d",
"asset/images/projects_img/notes_app/notes_app_2.png": "3896a6315c909ae4e9c73621b3cb7bef",
"asset/images/projects_img/notes_app/notes_app_cover.png": "dc88460b374cd2f0ce10db0005693621",
"asset/images/projects_img/weather_app/weather_2.jpeg": "e49ff0274c9b34df3c1101aa6d121a9d",
"asset/images/projects_img/weather_app/weather_3.jpeg": "cbcda2558824daafb4858d07660037a8",
"asset/images/projects_img/weather_app/weather_8.jpeg": "80cf76460fa035f116aa3714cf141eb1",
"asset/images/projects_img/weather_app/weather_4.jpeg": "550690f42c19ba9a44e039a27ec923b1",
"asset/images/projects_img/weather_app/weather_5.jpeg": "412a5ca3c7bc6aa61a270f615259f84b",
"asset/images/projects_img/weather_app/weather_6.jpeg": "68f029cd266958835c6b4a19951b5aa8",
"asset/images/projects_img/weather_app/weather_7.jpeg": "7fa63d54acc8e790afa79977216d4dc2",
"asset/images/projects_img/weather_app/weather_app_cover.jpg": "788d2d84c1cf604fdfa36a19e9ebd6b2",
"asset/images/projects_img/weather_app/weather_1.jpeg": "bc07525941a6eeb0aa02068ea3a8a63e",
"asset/images/projects_img/donefy_app/donefy_1.webp": "e144cac06cfa7db7f089a37e6589a156",
"asset/images/projects_img/donefy_app/donefy_project.png": "63571aab4aa014c7e32da0b1aa93e323",
"asset/images/projects_img/donefy_app/donefy_6.webp": "a0ea936bf324fde47e5f93ca6eed2e91",
"asset/images/projects_img/donefy_app/donefy_4.webp": "fa822ce600e6d1acd07cea724fb8d3ca",
"asset/images/projects_img/donefy_app/donefy_5.webp": "bd3a34db63f7406778c2d56ecf27e070",
"asset/images/projects_img/donefy_app/donefy_2.webp": "143f65ea6813246df3bcd020160fb743",
"asset/images/projects_img/donefy_app/donefy_3.webp": "cb98a326a9cacc4e57bcd3d6c406249f",
"asset/images/projects_img/taqtak_app/taqtak_3.webp": "03d79ce4c267794003cf8ed2d05bee9f",
"asset/images/projects_img/taqtak_app/taqtak_2.webp": "46ac477d01223b40e3e09cfa2960e87d",
"asset/images/projects_img/taqtak_app/taqtak_5.webp": "0d76007082c73eb3ac5cbe633971c238",
"asset/images/projects_img/taqtak_app/taqtak_4.webp": "e2520ebfc7739689977e8314d9f6ba01",
"asset/images/projects_img/taqtak_app/taqtak_7.webp": "8b26087d6453640c9abef8343377c702",
"asset/images/projects_img/taqtak_app/taqtak_project_cover.png": "6384cf315f9c0547910d246f304096dd",
"asset/images/projects_img/taqtak_app/taqtak_6.webp": "c5956fe4f1f00ffc05ac955a5571c79f",
"asset/images/projects_img/taqtak_app/taqtak_1.webp": "88ed6102242668359c6d518ce6d070e4",
"asset/images/projects_img/delivery_app/delivery_6.jpeg": "a7d08cfc3dc263330fc48b7a82831d92",
"asset/images/projects_img/delivery_app/delivery_7.jpeg": "eed765f3ca0ad3e8032910657c978c52",
"asset/images/projects_img/delivery_app/delivery_1.jpeg": "8c3f52b316dfe9f9808c33f75ef7d278",
"asset/images/projects_img/delivery_app/delivery_2.jpeg": "f9a26a20128a6be58cefad6b5938ee67",
"asset/images/projects_img/delivery_app/delivery_3.jpeg": "d9748c1933033b716c9a7f4fabc1bbf5",
"asset/images/projects_img/delivery_app/delivery_4.jpeg": "db76a7108b97a7e60306e1fc16fff25b",
"asset/images/projects_img/delivery_app/delivery_5.jpeg": "7f12c76bdf903abc9bfac966b66b8316",
"asset/images/projects_img/delivery_app/delivery_food_project.png": "e6c67c956b18d66f56a7f9c2b6780582",
"asset/images/email_logo.png": "80d4f670a11ec6eddeb2d2ce548aeac0",
"asset/images/ios_logo.png": "8e0d03f846cb5c5642c7c671dae56105",
"asset/images/github_logo.png": "1fc5ba73e0e63e36bc09e37a461a7cfc",
"asset/images/whatsapp_logo.jpg": "7ae8c06b6e896c3e91f590c80cecfa91",
"asset/images/figma_logo.png": "184eebd4ecc77eb898eba49e4b314053",
"asset/images/my_photo.jpeg": "b051474a6121d3b9d67b267959f9f20d",
"asset/images/website_logo.png": "65791d958f782e2e7c079e1f3798c5cb",
"asset/images/jira_logo.png": "082b77292a46330383d5b04903017eab",
"asset/images/photoshop_logo.png": "8c202533b81a323c7afec1d279566639",
"asset/images/placeholder.png": "5192dc05d342ca6405da675ab3cf000a",
"asset/images/dart_logo.png": "31976ff22bb0bd0ce18da966097ac742",
"asset/images/firebase_logo.png": "cbe75d84eb4053b27dd641814e356089",
"asset/images/linkedin_logo.webp": "a645f5f07d8015ebff18f774b3de3f2d",
"asset/images/postman_logo.png": "d69bf22e775b82bc58f8d88c5a053db6",
"asset/images/android_logo.png": "19a2e93acbb01a7cd6969ac88905ea30",
"asset/images/adobe_xd_logo.png": "5b1cedcf1839e8d0778c708c4a4bf3c8",
"test/widget_test.dart": "1f43636adeefe84973d55af8b626d5a2",
"main.dart.js": "69445b114c9f82533aef633d2e87ab2e",
"web/index.html": "ab42697f56ef8353b6905de158d44791",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "4908c1bd868d2b0a6af33ca418a4ba08",
"pubspec.lock": "f61636df119a58fb643f5ea6a863a92a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "944eaa608d997672ac0dfcbfb00da3a3",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/Info.plist": "0d66b4a1b358a37c79e5beae50e90d28",
"ios/Runner.xcodeproj/project.pbxproj": "29090fff61145bb9e7201b5426a8c605",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ffac881d52d43c06cc1b45b6aeabc194",
"ios/Flutter/Debug.xcconfig": "46d49915c32600030d79cd085ab92cf9",
"ios/Flutter/Release.xcconfig": "b60ff1c5444e52fc259cf0169dfbe87d",
"ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"ios/Podfile": "6523fe4db6c34c836d9118f2b08e55f4",
"ios/Podfile.lock": "c2c1cd6053d1349169648dac08e90925",
"README.md": "f96f476807e0be7f6185e441b8b4a036",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "fb36b1e846fff4ceb77bf52a8af384ae",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/CMakeLists.txt": "0f2e762fe26e8c2a6c750c931b2c50ae",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/my_application.cc": "f5d4551ccbbc76ca7480c98c41691d87",
"linux/flutter/generated_plugin_registrant.cc": "bd6e64368e100cca8e55173215ae1bdd",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "0ed0777552923ab7bc4a3a8b5a31840e",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"android/app/build.gradle": "edacf18b07de2c90dd3b4064d55196b3",
"android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "a22af11c5edc00f633b860f338ead537",
"android/app/src/main/kotlin/com/example/my_portfolio_app/MainActivity.kt": "6c5f3d1bd050dc10ceaf964bf90fa98c",
"android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/gradle/wrapper/gradle-wrapper.properties": "8326b56294256808fb7a0f9cf951861f",
"android/build.gradle": "49bd0f7b88d0a680032394990a85627f",
"android/gradle.properties": "efccfb9decfb7feee9f4cc9a62cd43e6",
"android/settings.gradle": "e89e3890bc2889b9c36244c2dce37164",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4908c1bd868d2b0a6af33ca418a4ba08",
"lib/constants/images_path.dart": "6baec49c6bc64c868c2908d8755c3e4f",
"lib/constants/nav_item.dart": "6965d7d8c26c44d7f1398409a78198df",
"lib/constants/colors.dart": "619fc9bae5c0f6cf64dccdbad494012f",
"lib/constants/size_screens.dart": "c4dd482fe85faa3ff40b8ca78b7dda8b",
"lib/constants/skill_item.dart": "6de317d8ff3ae202629bd187771b7735",
"lib/utils/project_utils.dart": "1123d3fe8b757c57bc83bb92dad2158f",
"lib/main.dart": "1aae65b9024edb03d2df08992db066e2",
"lib/styles/style.dart": "ddeb807c0c9953ed54c60a3f325966e8",
"lib/pages/project_details_page.dart": "74707423f1d0ed25043f1e866e1893c7",
"lib/pages/home_page.dart": "d70afd44fda7788526e0058c0b1eadd0",
"lib/widgets/details_mobile.dart": "aff76df76eb9125b8a02847de741157f",
"lib/widgets/main_desktop.dart": "6299c5ff9575d0115df176acaf725a34",
"lib/widgets/project_card.dart": "9390ca59d7b7ca801e220c3b55be6225",
"lib/widgets/skills_desktop.dart": "17e0d8c4b927d0b318bf9e5e27f65c53",
"lib/widgets/site_logo.dart": "9972bc239636c8832a3468d4ade31c69",
"lib/widgets/header_desktop.dart": "10dde1d829a18d17ea29d18d85c92027",
"lib/widgets/drawer_mobile.dart": "b0d87e2a8a5023fa12a864cfa5f2165c",
"lib/widgets/skills_mobile.dart": "bc4f585e24b54914afea29db5d284fd0",
"lib/widgets/header_mobile.dart": "13573fb5fe9b440e232c0a9c7691fd24",
"lib/widgets/project_section.dart": "07a6b0372c58ed1edaddc2f373c0f7f7",
"lib/widgets/details_desktop.dart": "7a48e54b00bc20cb3fc95d684dd56b01",
"lib/widgets/main_mobile.dart": "8d9ebde181b50adbcf513fc447f87293",
"lib/widgets/footer.dart": "b1e92080948963bf176d2567b85116e1",
"lib/widgets/contact_section.dart": "e974be03dded9baab0fdb33e12872066",
"analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
"windows/CMakeLists.txt": "e3fbc0ffc08f0fe12da4db488f9e8971",
"windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/utils.cpp": "c8ab2070ab710025a405b8e44dd7174d",
"windows/runner/runner.exe.manifest": "19a145783806442d541438903cc9be98",
"windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/Runner.rc": "0c6773e01bdd96c649b4dfaca78a1017",
"windows/runner/main.cpp": "c59d6a52989fb38a463a372fb619b93f",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/flutter/generated_plugin_registrant.cc": "811328ee9b84867ab0b499bd33e5e470",
"windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"windows/flutter/generated_plugins.cmake": "c5f67f7b803991a430fbe23ab3da49c6",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
".git/REBASE_HEAD": "f0cd81e24c899fd15dd4680c82bb790d",
".git/ORIG_HEAD": "f0cd81e24c899fd15dd4680c82bb790d",
".git/config": "8cdd2b8aafed26594a2a62a01c50b46d",
".git/objects/61/b6f10e63e227a4c8bce1292da5314f64c2d36d": "606b35853f210cdc250e9b63f22d1555",
".git/objects/0d/9abd35cbf2a280eea60d763efe6530e44135ff": "53fccd470326bdc4e7c4741d89d88b13",
".git/objects/0c/18e53f372010bb57f9071e20317886a49a9cd8": "d261dcf02579d8f5f565cf4be7a80be4",
".git/objects/3e/684babb9a5f7fcf7b461650f5b424f7113e695": "9345338001f2e557a2b5ca477c0b403b",
".git/objects/50/62af7a3009cab7018686c887b3cac45b78a9b6": "837fa3f049b4aa74a95eee8acb8576e5",
".git/objects/57/03327e3e6a7f60544396b84391a81ecc62f62d": "8e04e394c7351ee9dc7c103458c5fe80",
".git/objects/3b/e47fe6dbc17cc56ce30d83c77382b58426c51a": "55e046ea076a276e6fbce465b14a8438",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/b4796e8bc8063cfc72118971bb325d30812487": "7fea1abf248da759cf0d3a97bf4aa37d",
".git/objects/6a/b9d16e79e8a0859397eaed08325aabd1322756": "27dda64ef42bc910f8b470fdc4f3e39a",
".git/objects/32/000ed6216676f75d1767adaae4454bf24a34fd": "f67d46094deae1301b4703e38e65fc1d",
".git/objects/3c/5f76127d460db8d2426455124a627c8a62ff7f": "9b5b196a1a059fca1d5bbc5387d247ef",
".git/objects/3d/44d3f2d58697520466435e5e1ac7bd3ea06b19": "af647c3b86c7fbd50a3b86212ba5c760",
".git/objects/58/a174abf1ca1048137bb593438aa0e02c1b6501": "1f7ca0f04e8b9c02211a4e1aa5f128c4",
".git/objects/0b/31ec2e8a2db8e7945dd64d9e26853d5af0ce48": "7b14f797176fb3925ab446dde656be8b",
".git/objects/0b/c61173a7e107c3e57675d8f7d74cd5e58964aa": "2150ec29219208d5e509808c846a76cb",
".git/objects/93/696989ee0245f7332aeeb8f2c844c145149cdb": "5928c0f69ff750dc335b99d4f623c068",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/d6f04df92d2266dcacaeabdd8be0c84e1860e3": "05aa47727b9b6f71efe5485e2d2fe866",
".git/objects/0e/c3fa35859ed9f89dbf8547da7c2951ea6004aa": "874b1b2220003c540e3ca741aff0e504",
".git/objects/60/b462cb3fc424d9dc310ea8b4c649afa0e4c743": "be01028a0dfa756be5a48986bdaa11c3",
".git/objects/34/ca5215c118199e9c90f97f2e1e73e7fe3e3a67": "613c28f6bb11c9144da139e352d0da46",
".git/objects/34/c2e03a82c228bfb7bc61cfd5cbe547c97cebc6": "1b0ccdd8d73e2096516e1a8808253832",
".git/objects/5f/e2291b854b0aba112c0ffe31821b8d7e8dc18e": "fb752b505068cd9070f48b2be25fc2c9",
".git/objects/9d/15650dc2d25f653a41a4732612ac7bec7c126b": "c9880390a78d772b0e6e0f6570200761",
".git/objects/9c/a1e17c636983dfd424e5eab506239751b513e7": "b7169248ae52212f86c8013fdc4c4805",
".git/objects/9c/54292d11fcad2fedb85feb7d431fdeec08d98f": "d3a89bf42a4ebb7470bd18dda5ba7f71",
".git/objects/a3/2e7c67699169c5674b1bcf2fcc3e975bc58b29": "406aa5a487b55edf05540adb63180054",
".git/objects/b5/77535f92d9cedfae773cf296acbf697a4b15b9": "ddb51baf77f91d2c936185de4d9b4f61",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/836aa69b41fc61f4fe6e3c88feb6817118cf23": "41cfef0e3b058f5a3eb69fbe3cd19e87",
".git/objects/ad/91d88f4486213281c0c8dfda6f8aecd5cfcb02": "dad472766c937d6ad62e0781508edc51",
".git/objects/bb/4d778c15c273bf0eb545f870c248cc4206afbf": "e8fff83fa4c3d91261943e1d043738b8",
".git/objects/d7/09f4cfac635e36327b24822cf408312c771bc9": "d62174a3ed26f7a5ff54c04e479c8e6c",
".git/objects/d0/0a0e086321dc230d46f55c61ac4fa99c767bce": "dfc5eb19b5372974e12ef4378a8df876",
".git/objects/df/164a92e836afe3ffe7e92ef0bc184164788b08": "ad0bb65a62a3ebc2bda1288d69fcd4c9",
".git/objects/a2/5539aa416b284c291c88fe7bb29e74a4106e0c": "da950deb47e3377f6b92dc48b33ba98b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/c4bc0c07614b91c23c0903076342ca52ee6bc0": "079b61b03402539665f33f0fca41bc99",
".git/objects/bc/9cc2a409d4e67b0074abe69c966de3dc80df7d": "6e878de773228aac7b27372ea28c3812",
".git/objects/bc/fe07f02dd7bf31984b5bccb368310af09868d3": "b9ff7d7bb8b76eb16d915d271254b83f",
".git/objects/bc/6c0feb77c230fa44d5087f706571eb1e98b1bd": "fbaade432bd8577d2dc7562050b5550f",
".git/objects/f3/060e56d989e351fc01b744b1ccfc70d719ce35": "73c205c3d9d80d85e3db10aaff42cf5e",
".git/objects/f3/e770e83921d486ca7cbc72d88206b720f42f4b": "7dd63b33150d68cb5068761617664d0d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/324128ea4bbb7d64f5c12420c0365f4086289a": "e5b62c380406e87eecebdee1978a67aa",
".git/objects/fc/17fa80e5b38cae1a21bb5a81e45db2eb91c0b8": "aace66b30be94980bf7e64d93e74c32c",
".git/objects/fd/e754f5ea90b46862d081dadfca31b722100025": "2089e380e398575a3fbf02bc62d25b71",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c1/75961914a1fd1f110e2843405d823d05acc45f": "f3036ce9e64519006fcc98730e04c741",
".git/objects/ec/3d4b2b5a51adfaafba4d2bc122abf634b76c94": "7663e64b5e57755346d5247462a7a9f0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/26da219c46601df3ba4d51ce1a14f52ecf021c": "29d6a5354201e9baac792d8348b17b12",
".git/objects/18/95a42f7f3c1de5733518b301c13b571adbecc2": "930e590f16a8d7f5fdc29f0c2671e993",
".git/objects/27/2b64432fc955de8eb6c7a5ec2ef827a3067b2a": "85068580030896ddbb550653fb4c704e",
".git/objects/4b/a44a43e744f0537b89c4b3e41ab2fe020f9afe": "af00c46c63f23812eb6e007b77be5a07",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/pack/pack-55b6d63a9848fa363516c8ad1f2e5d59185c3c01.idx": "5712dba6254ab4f320fe1d32ababe3f0",
".git/objects/pack/pack-55b6d63a9848fa363516c8ad1f2e5d59185c3c01.pack": "4f67b8c50567ff34822b4decd396977c",
".git/objects/7c/f0099b2c54dd636ae397a4ad80d25ff16fce88": "e310a5488b8aeaa5768e8856ae6d8eb9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/d8349da0db522c153480e80f35fbf30acabffa": "7f88382753dab4a62da741859aa974bd",
".git/objects/89/2036fdd9d5456c78e1dddb51ada843e6cff970": "c03dd5f68e671dc8bb1e72c98590496e",
".git/objects/89/240f26fb18eeec9891c744dd9449902353b003": "0cac2b09929ac28d9c85c48749134000",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/9b346318b57a04d41fd50ee7752780c6d954b3": "3f8e97d758422b0fc0295ec73c55e24b",
".git/objects/80/e26495b7f399d7f01020256ed0a25d0492e861": "6e30c286c79d58832f3f9b522779ce8f",
".git/objects/80/9ecd8895b4cf15648573b8ce12f191d73be08c": "a8b59fe832cb449e5449375ee510e0a4",
".git/objects/1a/639438144e767d59f9cdee858a3a56180a5c4b": "9efaa0c7ec0192e2b00bcbbf46cab89d",
".git/objects/17/c57993f7b89174d02777cf6ad275989a57466a": "2eefa034e3cc4448139faff5d066af88",
".git/objects/17/ecc7c99c93ef3060ac2865f95dd7cbd459feaa": "e30de316ae2c8062c5bd04ad3301a0d5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/1e9f707da4665975c241a4448b5a6784873c34": "eddee0527ec04943e70e69cbb0717d3f",
".git/objects/7e/89a843da1b7d5cf3e5f501bf1f6a2272e8c056": "73fa24e9d3899493c348fb893997824a",
".git/objects/7e/33203565b6c82229740100715c4f5e86376017": "4ee700bb127d4388ca80db8d8d8984c3",
".git/objects/10/e355e21ff03d7e67daca3ecc579e616a66eb69": "21a14888efcaf78fc92f5454f384c3c3",
".git/objects/10/06a3755403bd7549621a544d09dbd1fd45b590": "4d705da9119e14a2b61f88da03f76ba1",
".git/objects/10/c3a926ed2423b670d8f40b8d33c804e17d5bc3": "fb3d11129679b2a24d746c186b96689b",
".git/objects/19/88a6825c8aa44b245412440dabc8ff8788cd00": "07fbb582ba254e4509418c79c57259aa",
".git/objects/4c/ae65d9df62a21c417555d9f21e092aad486c83": "d08d6fa9e3b5ebb5faa50974d388dd12",
".git/objects/21/3cd67f91e86318905cbce19fbaff864b976e8f": "63fc5eb1920835e442b28bf6172bd824",
".git/objects/44/b3b279e0f58e85c5c7ddf58e862d45354d783e": "2717666ae919c47588294370c5efecbd",
".git/objects/44/a2f26ac87078e3756c2ffd858702220394d79f": "1ce66b0224cf6305c10c21ffa21b1d4f",
".git/objects/44/19d4ef6b3bad08d1463c77ac3f43bf63c69db6": "f77e5cbdbc382b57e301c1749b99e61c",
".git/objects/2a/c0cfe55be4f70cea39c9645617e10c062e5269": "7c5ef11dd890287d0947e38cc04b820c",
".git/objects/2f/ea7471da59671cadd8245a206936e75df6e8cb": "26174c5102617cc0f3cd7a1d8e811fde",
".git/objects/2f/012c78c0327d09f70943490ab5ad27b5977bde": "9a8532d9466aa6436079f26a76875508",
".git/objects/2f/6ea8fc09d655c2874dd0216aa11633eb8e4f7a": "540efb00c3d81d5fbac4bd1f40b27bb1",
".git/objects/2f/7fdb8bd81451c8195b86d0b2d8b0f51cd98760": "a24b27a744eb0224756b3698c817271b",
".git/objects/43/e2a733a7c9aecbab6daea968d5a9dd756bc370": "84b7e5952f61a355c9f83f742585026a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/2e18fcbacf9577a322e37de68fab87da124732": "d10a4419e8a475d2740426371246af87",
".git/objects/6e/10a8e948262ae64da518588e530a3e6e1a2474": "0eac531d6943383ecc05470fb1a537f6",
".git/objects/36/258868bebad37d654f69bfc104ee4d8449df7e": "e2bbcfd4b9b2758380238642cc3c574b",
".git/objects/09/141979564b7102cc92c5e04f23743a55a59d69": "6948cb01373b256b0d46c7e34373dcdd",
".git/objects/31/3af0231d9344fe88863a3f41af0178aeb5442b": "1ea012f378f35611343ca79192cbc1d9",
".git/objects/31/edf37bf98dbb6ea3b58abcd632cce13d7c298e": "deedff321dc29383be3d62ff23afe38e",
".git/objects/31/0732c0096b01b23d247f724db42c24cad6b042": "2c9e4c0401d54a632bd3a2e4239081c4",
".git/objects/31/12f0131ab79a665840b9fb433a600e3b30e900": "71e864b44089ba619cf1b6ccfb12a3e6",
".git/objects/3f/cc38dc297573b8b5f8a8bfd8c9069fe89a19b2": "b2e9547ca85777e2c7c340650918b03c",
".git/objects/30/8d0d2498fffe1b3b4b616b10392f35917f221a": "13769219520472ed18236a175f148efa",
".git/objects/30/7bf3a1242d5b2ff8df97459da92aecbcf62f35": "d64d2d100aabc2b8ca966683a712a3a9",
".git/objects/5b/fe4718e00f5f947bc73f85b1e8608f9b680d87": "6ec4a74337fb34eea9b1cd3f06a9078e",
".git/objects/5b/6b044bbbf765c19203a40f6bc89ba6014a7072": "3d23236390965f77fea333d9de69f254",
".git/objects/6d/46dc49fbc0c50c323c72696fe27eac0185ef29": "5bf82d269d60e20f89f57b604570ca83",
".git/objects/55/16c69ba563d80e35bf367969c371e1aee1b7c2": "c782e7e56b0e52611ac12249d387ff9a",
".git/objects/64/7b799fccb0cac29b4b502a66767d65706b933d": "7a9728117a034af4d0cca5a794165a05",
".git/objects/90/6c77973574b14dba13a179983567361a0d9793": "01b6ca03856a262116694674ac2e43a0",
".git/objects/90/f06c25ce5d8b94fbd4890d8e6f88419b8ced59": "7a3e461e5f349e0e5baa7ccd8d28c5ea",
".git/objects/d3/349f37b24a2b48d3184d796d02e34ccd62dba6": "ac4b23cfcea2e488a2278e7c182e3999",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ac54f9a9fc898a6f8753db10e3223918e8ea85": "9c30f2b445b767dd6a4cd63d62d26ede",
".git/objects/ba/36e9396ee2e80bb644249b7d880880dd73d1e3": "84daf07425b9d25424d0ab3bd360dd0a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/7cb4f48b1165848c856a50414d80353cfc5263": "dcb32ddc3c312564edcc6e8d027de03f",
".git/objects/d5/61a667d5652bfffa23f3b71be0d98a3e5f26a3": "e7e333045e2369259eb0747cf1ef9e73",
".git/objects/d5/cd88e064008a08018f10ba01208de327cc272c": "06ac933b168d87126bdd143a4ec16f56",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/cdd6e740a63188e3f6f4e2e215db3769d8893d": "d978af77b6372aeede714a5278708e84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/43beee6f37972ebb709eab37f7abd116007c21": "7340d4cbcbf10c1edea85f6efb5c3890",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/727a559f6b59a6425b1b387428dc7ae4ccef5b": "57ab8908f5486e3248ee5b27c64063c1",
".git/objects/a1/19154d44b135410e057f6e1831239eb3f37e85": "4b0eae20f44e38b892ca97b1d177d05d",
".git/objects/ef/7d20e65b35da8686db7272d7d55a1f8e6b292d": "82230c51c48a33a857f704870af8f4f8",
".git/objects/ea/65154d002df60b5d8e01bc8d4bfbe07a9f97b9": "54fac92a25ff1aac414fae613765392c",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/fbd1379d16448be9dd6d06420d86c3ae774e11": "1754dfdf123dd726828290e871d7eec7",
".git/objects/e6/2fc746510b723193f2ab41d58a928d5b7e7e89": "73ba8f068ff1d6d3352555e564ce1909",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/9c996b1b78227fa94ba1d2fcde53e3e16b1df7": "362b64cf4bbee577ffc17d7895d2cb8e",
".git/objects/ff/ef71c5c0fabce8c7e29bc80e2b12857efadb3a": "6d261e56965a1988ace1cee37bf4d279",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/5128f712045847dfc89269dfd23cecaa198da8": "0a58078918c23aec5caad9dee2c46156",
".git/objects/f1/d6a69715a2bb865f6d56f7babe157e9225bd17": "5aa4079c31d3a08f35ba0a982255de7f",
".git/objects/f1/dd7801ca4c8010a16d0edb158d6f3066d3ec90": "d41e64ed943d7d7309e083b667966c9b",
".git/objects/e7/5919c2d3d4b756dd64eb8a9a43a64534ff43ba": "42c9c48282a756328abf86ebb3c1f51c",
".git/objects/cb/33c755a25ad6d643b4b794627f32bdbe083326": "ac97149356d0bef6be82e6bb9eb0bcd9",
".git/objects/f8/20e98ae9c013d11a1cac4434c0289b0436a862": "a9daeea731f4a2ea5f4fe475b3c78bd5",
".git/objects/e0/cfc2a25c61dd3a3f799e64aa68ed28692ed5c9": "69042aa6a9422d0fb4b6db533f6e8547",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/097960377983990f4f92cb538bd62d3554bbd4": "7770b7e0e4f9062acf13d53f92e0c9fa",
".git/objects/2c/0927758e7066f6282b4bb75c4e3f8aa8e7a970": "a6e3dc76b7b408eda2edd2a28d06dc25",
".git/objects/79/c93b7c44f0e652cbd4e03b569a0644da9f6b34": "1dea9a893cdbdb9b47bc00b3f6260e73",
".git/objects/83/8cd201e743692784ce0cca29c07886b0bfd1ca": "7829398e7bac1668b5b630469a11caf6",
".git/objects/1b/f26573df532fe64c5a3fd63885ce2ba52580b0": "7771877cbca11921fdb2d0b2601fba16",
".git/objects/1b/c21cbbe4caa3e3e4bb4f2d4ff2189789bd5dc0": "85c186634d8fd0a45c60bd832e0121a7",
".git/objects/1b/02424a5cd79724a1c41103228e158b0bc4de0b": "2d7114ecf242c110e0e49580e2c90a38",
".git/objects/77/59c6ac896b7b0cc40859dadfce27fe43f2fffd": "eaa76105ed7fdc184a7986f2d7a24275",
".git/objects/70/3d996c9bf1597a4cd1197e4d7f3056ab9c1f86": "de6bd6eecfed1cd7931efd0f2d92721a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8d/57ca07b74f823baeeda1d31f270370e1968cb6": "2b611e6115e733032ec031d5e3c2d606",
".git/objects/15/1114e6a5b86ccb404ee55608acdf871ee073c6": "486cd249391fb604d6971bb588d13377",
".git/objects/12/87b7328d2e2cbfafb96a6eb1d12955914439e6": "18e3013c2c1dafd8ed35930a62941370",
".git/objects/85/a2f0218b21d4855e22bd67ab1568edaa9dd5b7": "397c1b55ef57acb9febe51946f424ec1",
".git/objects/85/073a98fceb824de28fa7bf225ece6eff148eaa": "18082d885f505e0ee9665b3f58aaf9f2",
".git/objects/85/3bd2a922b0ba8524162bab61acbefcc5db9920": "a8f608161849cc55e898437c3297277a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2b/5039c17e23c48133f30244b43bc01a968cb51c": "18feab26efae141bf560a9b24157de62",
".git/objects/8b/46e47122bd085b1aff0f04986908acd5ac8ac5": "a40e9abd381ae23a08985367e1f9f100",
".git/objects/13/5bf81d3b840620344695cd36f51669db30d6bc": "a22780e92087b63aca46b149ccbd5c14",
".git/objects/7f/f18f0d5404e88115343a47af2a8d39ef17885a": "a2e5025d6c7d5bcd73b4ae639b0f4b68",
".git/objects/7f/fd2abe6e1bceb905953a01e5b3ab14e500068b": "f886df4290ad2f28fbeff134e2f7d744",
".git/objects/14/32a65bd4e980b893b66e8276b54c85fe514bdb": "a43be52738e26d78601571cbd1505f65",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "48ebb0962e6ea7c88625f079397b3eee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "689a6de402766fb20e4df296a375259e",
".git/logs/refs/heads/main": "c593bb803d9aa115007eb74d21cb707c",
".git/logs/refs/remotes/origin/main": "b0a63aff7cb9e15af6a28790f35e472e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f0cd81e24c899fd15dd4680c82bb790d",
".git/refs/remotes/origin/main": "073394390ca10f4fa22540af7aa3119a",
".git/index": "ddafc761bd78aff14fbc034176057506",
".git/COMMIT_EDITMSG": "8b8e82f2bb35e45b58c3bff91e8aebfa",
".git/FETCH_HEAD": "ddc7629330825f2945cc739f34fea488",
".git/rebase-merge/git-rebase-todo.backup": "5181eff7bd311b15f640a1661f357bc0",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "f0cd81e24c899fd15dd4680c82bb790d",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "884cd67b8b5dde566124b338b8acd00e",
".git/rebase-merge/onto": "073394390ca10f4fa22540af7aa3119a",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "ccbeeef12e3964031c5dff489f766e1f",
".git/rebase-merge/done": "8ab458d560bf4cdf1a10f308b9828015",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "f0cd81e24c899fd15dd4680c82bb790d",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "7dbd57108455547d325f999a2a85b342",
"assets/asset/images/flutter_logo.png": "1d407de8a3067a90f2f0d946e9c818e9",
"assets/asset/images/projects_img/trip_app/trip_4.jpg": "aa8de67d3bd1e859fc4f9452dc0611ee",
"assets/asset/images/projects_img/trip_app/trip_3.jpg": "732f6a94e2140634d4218e0556030346",
"assets/asset/images/projects_img/trip_app/trip_2.jpg": "94903177c33a80be9135e13802050cd3",
"assets/asset/images/projects_img/trip_app/trip_1.jpg": "954de1f1b9caadf22d2d0c3a17bd6d94",
"assets/asset/images/projects_img/to_do_app/to_do_app_cover.png": "7366961c9c8e380b8b3b8f00ae85b270",
"assets/asset/images/projects_img/to_do_app/to_do_app_1.png": "20d64b033bb4e08bfc04aaebfad69581",
"assets/asset/images/projects_img/lifestyle_app/life_style_1.png": "8885bfaf533b362426363b358da7fcef",
"assets/asset/images/projects_img/lifestyle_app/life_style_2.png": "88ed23fa35460d2479a3b7ac3f5b6252",
"assets/asset/images/projects_img/lifestyle_app/lifestyle_app_cover.png": "f30c43b44c7ea0a8d16f2079ff4e2363",
"assets/asset/images/projects_img/meal_app/meal_app_cover.jpg": "1899bbecfc162bb1331ffd94d9fb5a3e",
"assets/asset/images/projects_img/travel_app/travel_1.jpeg": "22e8fc36406878e74243cfc6c3341adc",
"assets/asset/images/projects_img/travel_app/travel_2.jpeg": "0d608d58510358041b9974bbf9927af7",
"assets/asset/images/projects_img/travel_app/travel_app_cover.jpeg": "0337ccbcfc09c831981aa3e336c4c1fb",
"assets/asset/images/projects_img/travel_app/travel_3.jpeg": "934e87f2c59056fa994a25c359861f0b",
"assets/asset/images/projects_img/bmi_app/bmi_app_cover.png": "f4e7d3e8319b57653a90a3da1057e307",
"assets/asset/images/projects_img/plant_app/screen_4.png": "e037f6c57d8980ab5d6c6c45545a9547",
"assets/asset/images/projects_img/plant_app/screen_5.png": "4646b33c8905449547e23f3e5af203e1",
"assets/asset/images/projects_img/plant_app/screen_7.png": "eccf233b75aac4892e6fee0b699c0cd6",
"assets/asset/images/projects_img/plant_app/screen_6.png": "2fa677d380c80955aab6213c75c0e738",
"assets/asset/images/projects_img/plant_app/screen_2.png": "8ecd830d50eab9d84d0f2f0378f7929b",
"assets/asset/images/projects_img/plant_app/screen_3.png": "08441cba77d6536089cc3b3d801823a7",
"assets/asset/images/projects_img/plant_app/screen_1.png": "0066ad55c53543c68c491ca9051c2046",
"assets/asset/images/projects_img/plant_app/screen_11.png": "c324d60792adbfa8e91d93cf1e4a51ab",
"assets/asset/images/projects_img/plant_app/screen_10.png": "b37c4e77a03b6536b7c29e5e590a9909",
"assets/asset/images/projects_img/plant_app/screen_12.png": "fbeddd38cc4982ca7815ddbd4a86ce3b",
"assets/asset/images/projects_img/plant_app/screen_13.png": "b3e8a30f0a760dda91c75147e096afa9",
"assets/asset/images/projects_img/plant_app/screen_8.png": "15e78cfdc782f1c22b0f457350bcc9b4",
"assets/asset/images/projects_img/plant_app/screen_9.png": "bc3ea883aa44da15b018b36aaa84082f",
"assets/asset/images/projects_img/plant_app/cover_plant.png": "2ce7f204556e3617b461afb1b3cac45e",
"assets/asset/images/projects_img/vertical_card_app/verical_center.png": "abb09b4aab57eee032a4db9a23e2e99d",
"assets/asset/images/projects_img/vertical_card_app/vertical_right.png": "dffe6ce114c6c54e22440ac06507d361",
"assets/asset/images/projects_img/vertical_card_app/vertical_left.png": "29f9b7e01015ccb1affc99761fbd3ccf",
"assets/asset/images/projects_img/notes_app/notes_app_4.png": "0086aa8d80ca548ae64c4b3ccc47469d",
"assets/asset/images/projects_img/notes_app/notes_app_1.png": "fcd7236c0f0d18e27b28dffdd14579e4",
"assets/asset/images/projects_img/notes_app/notes_app_3.png": "8514adc2f2ea42ce27d8509ac296ee1d",
"assets/asset/images/projects_img/notes_app/notes_app_2.png": "3896a6315c909ae4e9c73621b3cb7bef",
"assets/asset/images/projects_img/notes_app/notes_app_cover.png": "dc88460b374cd2f0ce10db0005693621",
"assets/asset/images/projects_img/weather_app/weather_2.jpeg": "e49ff0274c9b34df3c1101aa6d121a9d",
"assets/asset/images/projects_img/weather_app/weather_3.jpeg": "cbcda2558824daafb4858d07660037a8",
"assets/asset/images/projects_img/weather_app/weather_8.jpeg": "80cf76460fa035f116aa3714cf141eb1",
"assets/asset/images/projects_img/weather_app/weather_4.jpeg": "550690f42c19ba9a44e039a27ec923b1",
"assets/asset/images/projects_img/weather_app/weather_5.jpeg": "412a5ca3c7bc6aa61a270f615259f84b",
"assets/asset/images/projects_img/weather_app/weather_6.jpeg": "68f029cd266958835c6b4a19951b5aa8",
"assets/asset/images/projects_img/weather_app/weather_7.jpeg": "7fa63d54acc8e790afa79977216d4dc2",
"assets/asset/images/projects_img/weather_app/weather_app_cover.jpg": "788d2d84c1cf604fdfa36a19e9ebd6b2",
"assets/asset/images/projects_img/weather_app/weather_1.jpeg": "bc07525941a6eeb0aa02068ea3a8a63e",
"assets/asset/images/projects_img/donefy_app/donefy_1.webp": "e144cac06cfa7db7f089a37e6589a156",
"assets/asset/images/projects_img/donefy_app/donefy_project.png": "63571aab4aa014c7e32da0b1aa93e323",
"assets/asset/images/projects_img/donefy_app/donefy_6.webp": "a0ea936bf324fde47e5f93ca6eed2e91",
"assets/asset/images/projects_img/donefy_app/donefy_4.webp": "fa822ce600e6d1acd07cea724fb8d3ca",
"assets/asset/images/projects_img/donefy_app/donefy_5.webp": "bd3a34db63f7406778c2d56ecf27e070",
"assets/asset/images/projects_img/donefy_app/donefy_2.webp": "143f65ea6813246df3bcd020160fb743",
"assets/asset/images/projects_img/donefy_app/donefy_3.webp": "cb98a326a9cacc4e57bcd3d6c406249f",
"assets/asset/images/projects_img/taqtak_app/taqtak_3.webp": "03d79ce4c267794003cf8ed2d05bee9f",
"assets/asset/images/projects_img/taqtak_app/taqtak_2.webp": "46ac477d01223b40e3e09cfa2960e87d",
"assets/asset/images/projects_img/taqtak_app/taqtak_5.webp": "0d76007082c73eb3ac5cbe633971c238",
"assets/asset/images/projects_img/taqtak_app/taqtak_4.webp": "e2520ebfc7739689977e8314d9f6ba01",
"assets/asset/images/projects_img/taqtak_app/taqtak_7.webp": "8b26087d6453640c9abef8343377c702",
"assets/asset/images/projects_img/taqtak_app/taqtak_project_cover.png": "6384cf315f9c0547910d246f304096dd",
"assets/asset/images/projects_img/taqtak_app/taqtak_6.webp": "c5956fe4f1f00ffc05ac955a5571c79f",
"assets/asset/images/projects_img/taqtak_app/taqtak_1.webp": "88ed6102242668359c6d518ce6d070e4",
"assets/asset/images/projects_img/delivery_app/delivery_6.jpeg": "a7d08cfc3dc263330fc48b7a82831d92",
"assets/asset/images/projects_img/delivery_app/delivery_7.jpeg": "eed765f3ca0ad3e8032910657c978c52",
"assets/asset/images/projects_img/delivery_app/delivery_1.jpeg": "8c3f52b316dfe9f9808c33f75ef7d278",
"assets/asset/images/projects_img/delivery_app/delivery_2.jpeg": "f9a26a20128a6be58cefad6b5938ee67",
"assets/asset/images/projects_img/delivery_app/delivery_3.jpeg": "d9748c1933033b716c9a7f4fabc1bbf5",
"assets/asset/images/projects_img/delivery_app/delivery_4.jpeg": "db76a7108b97a7e60306e1fc16fff25b",
"assets/asset/images/projects_img/delivery_app/delivery_5.jpeg": "7f12c76bdf903abc9bfac966b66b8316",
"assets/asset/images/projects_img/delivery_app/delivery_food_project.png": "e6c67c956b18d66f56a7f9c2b6780582",
"assets/asset/images/email_logo.png": "80d4f670a11ec6eddeb2d2ce548aeac0",
"assets/asset/images/ios_logo.png": "8e0d03f846cb5c5642c7c671dae56105",
"assets/asset/images/github_logo.png": "1fc5ba73e0e63e36bc09e37a461a7cfc",
"assets/asset/images/whatsapp_logo.jpg": "7ae8c06b6e896c3e91f590c80cecfa91",
"assets/asset/images/figma_logo.png": "184eebd4ecc77eb898eba49e4b314053",
"assets/asset/images/my_photo.jpeg": "b051474a6121d3b9d67b267959f9f20d",
"assets/asset/images/website_logo.png": "65791d958f782e2e7c079e1f3798c5cb",
"assets/asset/images/jira_logo.png": "082b77292a46330383d5b04903017eab",
"assets/asset/images/photoshop_logo.png": "8c202533b81a323c7afec1d279566639",
"assets/asset/images/placeholder.png": "5192dc05d342ca6405da675ab3cf000a",
"assets/asset/images/dart_logo.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/asset/images/firebase_logo.png": "cbe75d84eb4053b27dd641814e356089",
"assets/asset/images/linkedin_logo.webp": "a645f5f07d8015ebff18f774b3de3f2d",
"assets/asset/images/postman_logo.png": "d69bf22e775b82bc58f8d88c5a053db6",
"assets/asset/images/android_logo.png": "19a2e93acbb01a7cd6969ac88905ea30",
"assets/asset/images/adobe_xd_logo.png": "5b1cedcf1839e8d0778c708c4a4bf3c8",
"assets/AssetManifest.json": "f5577372873ac562c5fa49fa8fc81c95",
"assets/NOTICES": "927d8dabeb8e81be341cf3866b698af9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d72ff13b9c9c2e7f2589b20c64fcd150",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8fced268cbc199c0cdfa670604b35e4",
"assets/fonts/MaterialIcons-Regular.otf": "20587f6f8362e9054b71c96fe2c8cae6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
