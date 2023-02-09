

const handler = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }
  const bodyBuffer = [];
  for await (const chunk of req) {
    bodyBuffer.push(chunk);
  }
  const data = Buffer.concat(bodyBuffer).toString();
  const reqData =  JSON.parse(data || "{}");
  const mul = reqData.num1 * reqData.num2
  
  
  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Multipication of two numbers`, mul }))
  res.end()
  
}

export default handler