
// this is a Scriptable script

let url = ""
// 
// new Request()

// let alert = new Alert()
// alert.message = args.shortcutParameter
// 
// alert.message = "jjj"
// 
// alert.presentAlert()

// QuickLook.present(args.shortcutParameter)

let headerToken = args.plainTexts[0]
let endpoint = args.urls[0]
let body = args.shortcutParameter

// let notification = new Notification()
// notification.body = JSON.stringify(body)
// notification.schedule()

let request = new Request(endpoint)
request.headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": headerToken,
}
request.body = JSON.stringify(body)
request.method = "POST"
request.allowInsecureRequest = true
request.onRedirect =
    (request) => {
        request.headers = {
            ...{
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": headerToken,
            }
        }

        request.body = JSON.stringify(body)
        return request
    }

let promise = request.loadJSON()

// promise.then(() => {
//   let response = request.response
//   let notification = new Notification()
//   notification.body = JSON.stringify("response")
//   notification.schedule()
// 
// })



Script.complete()
