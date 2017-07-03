function getTriangleArea(a, h) {
	if (0 >= a || 0 >= h) {
    alert('Nieprawidłowe dane');
}    
	else 
		return a * h / 2;
}
console.log( getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(1, 2);
var triangle3Area = getTriangleArea(3, 6);
