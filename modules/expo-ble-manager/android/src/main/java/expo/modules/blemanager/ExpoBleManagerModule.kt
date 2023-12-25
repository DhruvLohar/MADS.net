package expo.modules.blemanager

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoBleManagerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoBleManager")

    Constants(
      "PI" to Math.PI
    )

    Events("onChange")

    Function("hello") {
      "Hello world! 👋 Changed even more"
    }

    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(ExpoBleManagerView::class) {
      // Defines a setter for the `name` prop.
      Prop("name") { view: ExpoBleManagerView, prop: String ->
        println(prop)
      }
    }
  }
}
