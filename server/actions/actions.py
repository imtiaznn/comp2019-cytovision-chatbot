from typing import Any, Dict, List, Text

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

class DefaultLLMResponse(Action):
    def name(self):
        return "default_llm_response"
    
    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message(text="Default LLM Response Triggered")
        return []