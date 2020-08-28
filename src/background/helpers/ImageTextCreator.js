const canvasSize = 1024

export default (text,fontFamily) => {
    fontFamily=fontFamily||document.body.style.fontFamily
    const canvas = document.createElement("canvas");
    canvas.width=canvas.height=canvasSize
    const context = canvas.getContext('2d');
    const lines = text.split("\n");
    var LonggestLineLength = 0;
    for (const index in lines) {
        if (lines.hasOwnProperty(index)) {
            const line = lines[index];
            (line.length>LonggestLineLength) && (LonggestLineLength = line.length)
        }
    }
    // 设置字体
    context.font = (canvasSize*0.75)/((lines.length>LonggestLineLength)?lines.length:LonggestLineLength)+"px bold "+fontFamily;
    // 设置颜色
    context.fillStyle = "#fff";
    // 设置水平对齐方式
    context.textAlign = "center";
    // 设置垂直对齐方式
    context.textBaseline = "middle";
    context.fillText(text,512,512)
    function ImageText(context,text) {
        var OnTextUpdateListeners = []
        this.getText=()=>{
            return text;
        }
        this.updateText=(text)=>{
            context.clearReact(0,0,canvasSize,canvasSize);
            context.fillText(text,512,512);
            for (const index in OnTextUpdateListeners) {
                if (OnTextUpdateListeners.hasOwnProperty(index)) {
                    const listener = OnTextUpdateListeners[index];
                    (typeof listener === "function") && listener(this);
                }
            }
            
        }
        this.setOnTextUpdateListener=(listener)=>{
            if(typeof listener === "function") OnTextUpdateListeners.push(listener)
        }
        this.removeOnTextUpdateListener=(listener)=>{
            OnTextUpdateListeners.splice(OnTextUpdateListeners.indexOf(listener),1)
        }
        this.context = context
    }
    return new ImageText(context,text)
}