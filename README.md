# Todos Application
## Live Preview (Expo)
https://expo.dev/@sionkim00/todos
## Concept
In a modern society, we are buried with information. What if we had an app that only contains information that's consumable?
## Stacks

 - React Native
 - Redux-toolkit
 - React Navigation
 ## 🖥  Developments
 Users can easily navigation around app. To add a task, all you need to do is click a plus button.
 Managing multiple states can be quite complex in React Native. To avoid prop drilling and code readability,  I utilized redux-toolkit to handle complexed global states.
 

    
    dispatch(addTodosReducer(newTodo));
    dispatch(setTodosReducer(JSON.parse(todos)));
    ....
## 👀 Service Display


| <img src="https://github.com/sionkim00/todos/blob/master/previews/preview1.png" width="200"> | <img src="https://github.com/sionkim00/todos/blob/master/previews/preview2.png" width="200"> |
|--|--|
| Home Screen | Add Tasks |
