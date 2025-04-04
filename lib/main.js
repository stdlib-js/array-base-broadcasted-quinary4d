/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var broadcastArray = require( '@stdlib/array-base-broadcast-array' );


// MAIN //

/**
* Applies a quinary callback to elements in five broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
*
* @param {ArrayLikeObject<Array>} arrays - array-like object containing five input nested arrays and one output nested array
* @param {ArrayLikeObject<NonNegativeIntegerArray>} shapes - array shapes
* @param {Callback} fcn - quinary callback
* @returns {void}
*
* @example
* var ones4d = require( '@stdlib/array-base-ones4d' );
* var zeros4d = require( '@stdlib/array-base-zeros4d' );
*
* function add( x, y, z, w, v ) {
*     return x + y + z + w + v;
* }
*
* var shapes = [
*     [ 1, 1, 1, 2 ],
*     [ 1, 1, 2, 1 ],
*     [ 1, 1, 2, 2 ],
*     [ 1, 2, 1, 1 ],
*     [ 2, 2, 2, 2 ],
*     [ 2, 2, 2, 2 ]
* ];
*
* var x = ones4d( shapes[ 0 ] );
* var y = ones4d( shapes[ 1 ] );
* var z = ones4d( shapes[ 2 ] );
* var w = ones4d( shapes[ 3 ] );
* var v = ones4d( shapes[ 4 ] );
* var out = zeros4d( shapes[ 5 ] );
*
* bquinary4d( [ x, y, z, w, v, out ], shapes, add );
*
* console.log( out );
* // => [ [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ], [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ], [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ], [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ] ]
*/
function bquinary4d( arrays, shapes, fcn ) { // eslint-disable-line max-statements
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var dz0;
	var dz1;
	var dz2;
	var dz3;
	var dw0;
	var dw1;
	var dw2;
	var dw3;
	var du0;
	var du1;
	var du2;
	var du3;
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;
	var j0;
	var j1;
	var j2;
	var j3;
	var k0;
	var k1;
	var k2;
	var k3;
	var m0;
	var m1;
	var m2;
	var m3;
	var n0;
	var n1;
	var n2;
	var n3;
	var p0;
	var p1;
	var p2;
	var p3;
	var x0;
	var x1;
	var x2;
	var y0;
	var y1;
	var y2;
	var z0;
	var z1;
	var z2;
	var w0;
	var w1;
	var w2;
	var u0;
	var u1;
	var u2;
	var v0;
	var v1;
	var v2;
	var sh;
	var st;
	var o;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;

	sh = shapes[ 5 ];
	S0 = sh[ 3 ];
	S1 = sh[ 2 ];
	S2 = sh[ 1 ];
	S3 = sh[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 ) {
		return;
	}
	o = broadcastArray( arrays[ 0 ], shapes[ 0 ], sh );
	x = o.data;
	st = o.strides;
	dx0 = st[ 3 ];
	dx1 = st[ 2 ];
	dx2 = st[ 1 ];
	dx3 = st[ 0 ];

	o = broadcastArray( arrays[ 1 ], shapes[ 1 ], sh );
	y = o.data;
	st = o.strides;
	dy0 = st[ 3 ];
	dy1 = st[ 2 ];
	dy2 = st[ 1 ];
	dy3 = st[ 0 ];

	o = broadcastArray( arrays[ 2 ], shapes[ 2 ], sh );
	z = o.data;
	st = o.strides;
	dz0 = st[ 3 ];
	dz1 = st[ 2 ];
	dz2 = st[ 1 ];
	dz3 = st[ 0 ];

	o = broadcastArray( arrays[ 3 ], shapes[ 3 ], sh );
	w = o.data;
	st = o.strides;
	dw0 = st[ 3 ];
	dw1 = st[ 2 ];
	dw2 = st[ 1 ];
	dw3 = st[ 0 ];

	o = broadcastArray( arrays[ 4 ], shapes[ 4 ], sh );
	u = o.data;
	st = o.strides;
	du0 = st[ 3 ];
	du1 = st[ 2 ];
	du2 = st[ 1 ];
	du3 = st[ 0 ];

	v = arrays[ 5 ];

	j3 = 0;
	k3 = 0;
	m3 = 0;
	n3 = 0;
	p3 = 0;
	for ( i3 = 0; i3 < S3; i3++ ) {
		j2 = 0;
		k2 = 0;
		m2 = 0;
		n2 = 0;
		p2 = 0;
		x2 = x[ j3 ];
		y2 = y[ k3 ];
		z2 = z[ m3 ];
		w2 = w[ n3 ];
		u2 = u[ p3 ];
		v2 = v[ i3 ];
		for ( i2 = 0; i2 < S2; i2++ ) {
			j1 = 0;
			k1 = 0;
			m1 = 0;
			n1 = 0;
			p1 = 0;
			x1 = x2[ j2 ];
			y1 = y2[ k2 ];
			z1 = z2[ m2 ];
			w1 = w2[ n2 ];
			u1 = u2[ p2 ];
			v1 = v2[ i2 ];
			for ( i1 = 0; i1 < S1; i1++ ) {
				j0 = 0;
				k0 = 0;
				m0 = 0;
				n0 = 0;
				p0 = 0;
				x0 = x1[ j1 ];
				y0 = y1[ k1 ];
				z0 = z1[ m1 ];
				w0 = w1[ n1 ];
				u0 = u1[ p1 ];
				v0 = v1[ i1 ];
				for ( i0 = 0; i0 < S0; i0++ ) {
					v0[ i0 ] = fcn( x0[ j0 ], y0[ k0 ], z0[ m0 ], w0[ n0 ], u0[ p0 ] ); // eslint-disable-line max-len
					j0 += dx0;
					k0 += dy0;
					m0 += dz0;
					n0 += dw0;
					p0 += du0;
				}
				j1 += dx1;
				k1 += dy1;
				m1 += dz1;
				n1 += dw1;
				p1 += du1;
			}
			j2 += dx2;
			k2 += dy2;
			m2 += dz2;
			n2 += dw2;
			p2 += du2;
		}
		j3 += dx3;
		k3 += dy3;
		m3 += dz3;
		n3 += dw3;
		p3 += du3;
	}
}


// EXPORTS //

module.exports = bquinary4d;
