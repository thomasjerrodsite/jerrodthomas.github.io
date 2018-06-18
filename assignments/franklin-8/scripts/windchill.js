/* Input: Three coeficients from a quadratic equation.
* Processing: If they exist, compute the root or roots of the equation
* Output: The root or roots of the equation or "undefined" if they don't exist.

*/
function quadratic() {
    var t = parseFloat(document.getElementById('aInputBox').value);
    var s = parseFloat(document.getElementById('bInputBox').value);
    var n = Math.pow(s, 0.16);
    var f = 35.74 + 0.6215 * t - 35.75 * n + 0.4275 * t * n
    
    
    document.getElementById('output').innerHTML = 'The windchill is ' + Math.round(f) + '&deg;';
}
