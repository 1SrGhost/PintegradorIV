


//validar campos vacios
//crear estrategia ofline

creando plantilla global de thema y colores





# Commits comments:
- first commit: splashScreen, logginGoogle, themeContext, userContex, navigationModals. Works! 

- firestore context categories: firestore works context, multidex actided, add react-native-picker

- crudCategories: categories Crud WORKS


- taskStatusDimensions:
add suport gif for component task-status wich show an modal whit a gif notifyng succes or error
add navigating-without-navigation-prop for call the modal of statusTask any part, and use in the context
now contextCategories call modal whit info about state of Crud, error o sucees show a image.(gif, task-status)
added dimensions into categories conext and forms

- 
// excluir hprof .. archivo pesado gitinore
// crear componente para asignar medidas y al mismo tiempo sirva de filtro (3/4 * 1/2, 1/4)
//las medidas se agregan al nombre, pero se crea un campo en la Db con esta para una busqieda mas rapida, opcional
//la longiud, por defecto si es tuberia 6mt o lamina 2mt x 1mt
add InteractionManager for acelerate loading screens
add component loading activitiIndicator
created selectComponent custom from categories and lengths, the two share the same field name
disabled option delete categories



# fixed issues Gradle:

-problema con gradle de verison: 
abrir archivo gradle-wrapper.properties en 
D:\Projects\RN metal\app02\android\gradle\wrapper/
actualizar:
distributionUrl=https\://services.gradle.org/distributions/gradle-6.2-all.zip
a
distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip
Luego ejecutar con doble click gradlew.bat
en D:\Projects\RN metal\app02\android

Puede aparecer otro problema con el gradle y se soluciona asi:
cd android && ./gradlew clean && ./gradlew :app:bundleRelease.
Escribir un comando y luego el otro ya que este proceso es algo demorado



# Useful information sources:

Splash
https://medium.com/@thepsychicindian/splash-screen-in-react-native-android-ios-2020-842f26d1da98

Hermes engine
https://reactnative.dev/docs/hermes

Login Google
https://heartbeat.fritz.ai/integrating-google-sign-in-provider-with-a-react-native-app-a064dd1efaf4

https://github.com/react-native-google-signin/google-signin
Para tener el login Google se debe configurar firebase como esta en el siguiente link 
https://rnfirebase.io/

al usar .\gradlew signingReport en /android escogo normalmente la clave SHA-1 de la primera fila
Variant: debugAndroidTest
Config: debug
..

Activar Multidex
https://rnfirebase.io/enabling-multidex


Habilitar iconos de otras fuentes
https://github.com/oblador/react-native-vector-icons#android

firestore
https://rnfirebase.io/

react-native-picker
https://github.com/react-native-picker/picker

crud firestore example
https://saveyourtime.medium.com/firebase-cloud-firestore-add-set-update-delete-get-data-6da566513b1b



checkGif
https://iconos8.es/animated-icons/set/done
https://www.mahindrafirstchoiceservices.com/assests/images/bd/success-2.gif


cancelGif
https://media1.giphy.com/media/pjFF8YLW996aXqFHAu/giphy.gif

support gif android
https://reactnative.dev/docs/0.62/image

https://reactnavigation.org/docs/navigating-without-navigation-prop/