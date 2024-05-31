from fastapi import FastAPI, Body

app = FastAPI()

@app.get("/api/test2")
def hello():
    return "Hello from python!"
