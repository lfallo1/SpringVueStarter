#Spring Boot / Thymeleaf with Vuejs
## examples include the following:
#### restcontroller and regular controllers
#### basic spring security with login/logout handlers, role specific functionality, custom security annotations
#### thymeleaf spring security integration
#### global exception handling for restservices
#### vuejs integration w/hot-reload
#### vuejs lifecycle hooks
#### vuex state management
#### vuejs auth management

#### To generate git properties file use mvn clean package -DskipTests=true
#### To build, create/push docker image: mvn clean install docker:build docker:push -Ddocker.host=unix:///var/run/docker.sock (-DskipTests=true to also skip tests)
