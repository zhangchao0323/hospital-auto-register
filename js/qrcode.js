!function() {
    function r(r, o) {
        var f;
        r > o && (f = r, r = o, o = f), f = o, f *= o, f += o, f >>= 1, A[f += r] = 1;
    }
    function o(o, f) {
        var e;
        for (z[o + s * f] = 1, e = -2; e < 2; e++) z[o + e + s * (f - 2)] = 1, z[o - 2 + s * (f + e + 1)] = 1, 
        z[o + 2 + s * (f + e)] = 1, z[o + e + 1 + s * (f + 2)] = 1;
        for (e = 0; e < 2; e++) r(o - 1, f + e), r(o + 1, f - e), r(o - e, f - 1), r(o + e, f + 1);
    }
    function f(r) {
        for (;r >= 255; ) r = ((r -= 255) >> 8) + (255 & r);
        return r;
    }
    function e(r, o, e, a) {
        var t, n, i;
        for (t = 0; t < a; t++) S[e + t] = 0;
        for (t = 0; t < o; t++) {
            if (255 != (i = b[S[r + t] ^ S[e]])) for (n = 1; n < a; n++) S[e + n - 1] = S[e + n] ^ k[f(i + I[a - n])]; else for (n = e; n < e + a; n++) S[n] = S[n + 1];
            S[e + a - 1] = 255 == i ? 0 : k[f(i + I[0])];
        }
    }
    function a(r, o) {
        var f;
        return r > o && (f = r, r = o, o = f), f = o, f += o * o, f >>= 1, f += r, A[f];
    }
    function t(r) {
        var o, f, e, t;
        switch (r) {
          case 0:
            for (f = 0; f < s; f++) for (o = 0; o < s; o++) o + f & 1 || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 1:
            for (f = 0; f < s; f++) for (o = 0; o < s; o++) 1 & f || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 2:
            for (f = 0; f < s; f++) for (e = 0, o = 0; o < s; o++, e++) 3 == e && (e = 0), e || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 3:
            for (t = 0, f = 0; f < s; f++, t++) for (3 == t && (t = 0), e = t, o = 0; o < s; o++, 
            e++) 3 == e && (e = 0), e || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 4:
            for (f = 0; f < s; f++) for (e = 0, t = f >> 1 & 1, o = 0; o < s; o++, e++) 3 == e && (e = 0, 
            t = !t), t || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 5:
            for (t = 0, f = 0; f < s; f++, t++) for (3 == t && (t = 0), e = 0, o = 0; o < s; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + !(!e | !t) || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 6:
            for (t = 0, f = 0; f < s; f++, t++) for (3 == t && (t = 0), e = 0, o = 0; o < s; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + (e && e == t) & 1 || a(o, f) || (z[o + f * s] ^= 1);
            break;

          case 7:
            for (t = 0, f = 0; f < s; f++, t++) for (3 == t && (t = 0), e = 0, o = 0; o < s; o++, 
            e++) 3 == e && (e = 0), (e && e == t) + (o + f & 1) & 1 || a(o, f) || (z[o + f * s] ^= 1);
        }
    }
    function n(r) {
        var o, f = 0;
        for (o = 0; o <= r; o++) F[o] >= 5 && (f += M + F[o] - 5);
        for (o = 3; o < r - 1; o += 2) F[o - 2] == F[o + 2] && F[o + 2] == F[o - 1] && F[o - 1] == F[o + 1] && 3 * F[o - 1] == F[o] && (0 == F[o - 3] || o + 3 > r || 3 * F[o - 3] >= 4 * F[o] || 3 * F[o + 3] >= 4 * F[o]) && (f += y);
        return f;
    }
    function i() {
        var r, o, f, e, a, t = 0, i = 0;
        for (o = 0; o < s - 1; o++) for (r = 0; r < s - 1; r++) (z[r + s * o] && z[r + 1 + s * o] && z[r + s * (o + 1)] && z[r + 1 + s * (o + 1)] || !(z[r + s * o] || z[r + 1 + s * o] || z[r + s * (o + 1)] || z[r + 1 + s * (o + 1)])) && (t += R);
        for (o = 0; o < s; o++) {
            for (F[0] = 0, f = e = r = 0; r < s; r++) (a = z[r + s * o]) == e ? F[f]++ : F[++f] = 1, 
            i += (e = a) ? 1 : -1;
            t += n(f);
        }
        i < 0 && (i = -i);
        var c = i, l = 0;
        for (c += c << 2, c <<= 1; c > s * s; ) c -= s * s, l++;
        for (t += l * _, r = 0; r < s; r++) {
            for (F[0] = 0, f = e = o = 0; o < s; o++) (a = z[r + s * o]) == e ? F[f]++ : F[++f] = 1, 
            e = a;
            t += n(f);
        }
        return t;
    }
    function c(n) {
        var c, F, M, R, y, _, N, Q;
        R = n.length, l = 0;
        do {
            if (l++, M = 4 * (x - 1) + 16 * (l - 1), u = w[M++], v = w[M++], d = w[M++], h = w[M], 
            M = d * (u + v) + v - 3 + (l <= 9), R <= M) break;
        } while (l < 40);
        for (s = 17 + 4 * l, y = d + (d + h) * (u + v) + v, R = 0; R < y; R++) p[R] = 0;
        for (S = n.slice(0), R = 0; R < s * s; R++) z[R] = 0;
        for (R = 0; R < (s * (s + 1) + 1) / 2; R++) A[R] = 0;
        for (R = 0; R < 3; R++) {
            for (M = 0, F = 0, 1 == R && (M = s - 7), 2 == R && (F = s - 7), z[F + 3 + s * (M + 3)] = 1, 
            c = 0; c < 6; c++) z[F + c + s * M] = 1, z[F + s * (M + c + 1)] = 1, z[F + 6 + s * (M + c)] = 1, 
            z[F + c + 1 + s * (M + 6)] = 1;
            for (c = 1; c < 5; c++) r(F + c, M + 1), r(F + 1, M + c + 1), r(F + 5, M + c), r(F + c + 1, M + 5);
            for (c = 2; c < 4; c++) z[F + c + s * (M + 2)] = 1, z[F + 2 + s * (M + c + 1)] = 1, 
            z[F + 4 + s * (M + c)] = 1, z[F + c + 1 + s * (M + 4)] = 1;
        }
        if (l > 1) for (R = g[l], F = s - 7; ;) {
            for (c = s - 7; c > R - 3 && (o(c, F), !(c < R)); ) c -= R;
            if (F <= R + 9) break;
            o(6, F -= R), o(F, 6);
        }
        for (z[8 + s * (s - 8)] = 1, F = 0; F < 7; F++) r(7, F), r(s - 8, F), r(7, F + s - 7);
        for (c = 0; c < 8; c++) r(c, 7), r(c + s - 8, 7), r(c, s - 8);
        for (c = 0; c < 9; c++) r(c, 8);
        for (c = 0; c < 8; c++) r(c + s - 8, 8), r(8, c);
        for (F = 0; F < 7; F++) r(8, F + s - 7);
        for (c = 0; c < s - 14; c++) 1 & c ? (r(8 + c, 6), r(6, 8 + c)) : (z[8 + c + 6 * s] = 1, 
        z[6 + s * (8 + c)] = 1);
        if (l > 6) for (R = C[l - 7], M = 17, c = 0; c < 6; c++) for (F = 0; F < 3; F++, 
        M--) 1 & (M > 11 ? l >> M - 12 : R >> M) ? (z[5 - c + s * (2 - F + s - 11)] = 1, 
        z[2 - F + s - 11 + s * (5 - c)] = 1) : (r(5 - c, 2 - F + s - 11), r(2 - F + s - 11, 5 - c));
        for (F = 0; F < s; F++) for (c = 0; c <= F; c++) z[c + s * F] && r(c, F);
        for (y = S.length, _ = 0; _ < y; _++) p[_] = S.charCodeAt(_);
        if (S = p.slice(0), c = d * (u + v) + v, y >= c - 2 && (y = c - 2, l > 9 && y--), 
        _ = y, l > 9) {
            for (S[_ + 2] = 0, S[_ + 3] = 0; _--; ) R = S[_], S[_ + 3] |= 255 & R << 4, S[_ + 2] = R >> 4;
            S[2] |= 255 & y << 4, S[1] = y >> 4, S[0] = 64 | y >> 12;
        } else {
            for (S[_ + 1] = 0, S[_ + 2] = 0; _--; ) R = S[_], S[_ + 2] |= 255 & R << 4, S[_ + 1] = R >> 4;
            S[1] |= 255 & y << 4, S[0] = 64 | y >> 4;
        }
        for (_ = y + 3 - (l < 10); _ < c; ) S[_++] = 236, S[_++] = 17;
        for (I[0] = 1, _ = 0; _ < h; _++) {
            for (I[_ + 1] = 1, N = _; N > 0; N--) I[N] = I[N] ? I[N - 1] ^ k[f(b[I[N]] + _)] : I[N - 1];
            I[0] = k[f(b[I[0]] + _)];
        }
        for (_ = 0; _ <= h; _++) I[_] = b[I[_]];
        for (M = c, F = 0, _ = 0; _ < u; _++) e(F, d, M, h), F += d, M += h;
        for (_ = 0; _ < v; _++) e(F, d + 1, M, h), F += d + 1, M += h;
        for (F = 0, _ = 0; _ < d; _++) {
            for (N = 0; N < u; N++) p[F++] = S[_ + N * d];
            for (N = 0; N < v; N++) p[F++] = S[u * d + _ + N * (d + 1)];
        }
        for (N = 0; N < v; N++) p[F++] = S[u * d + _ + N * (d + 1)];
        for (_ = 0; _ < h; _++) for (N = 0; N < u + v; N++) p[F++] = S[c + _ + N * h];
        for (S = p, c = F = s - 1, M = y = 1, Q = (d + h) * (u + v) + v, _ = 0; _ < Q; _++) for (R = S[_], 
        N = 0; N < 8; N++, R <<= 1) {
            128 & R && (z[c + s * F] = 1);
            do {
                y ? c-- : (c++, M ? 0 != F ? F-- : (M = !M, 6 == (c -= 2) && (c--, F = 9)) : F != s - 1 ? F++ : (M = !M, 
                6 == (c -= 2) && (c--, F -= 8))), y = !y;
            } while (a(c, F));
        }
        for (S = z.slice(0), R = 0, F = 3e4, M = 0; M < 8 && (t(M), (c = i()) < F && (F = c, 
        R = M), 7 != R); M++) z = S.slice(0);
        for (R != M && t(R), F = m[R + (x - 1 << 3)], M = 0; M < 8; M++, F >>= 1) 1 & F && (z[s - 1 - M + 8 * s] = 1, 
        M < 6 ? z[8 + s * M] = 1 : z[8 + s * (M + 1)] = 1);
        for (M = 0; M < 7; M++, F >>= 1) 1 & F && (z[8 + s * (s - 7 + M)] = 1, M ? z[6 - M + 8 * s] = 1 : z[7 + 8 * s] = 1);
        return z;
    }
    var l, s, u, v, d, h, g = [ 0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28 ], C = [ 3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177 ], m = [ 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107 ], w = [ 1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30 ], b = [ 255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175 ], k = [ 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0 ], S = [], p = [], z = [], A = [], F = [], x = 2, I = [], M = 3, R = 3, y = 40, _ = 10, N = null, Q = {
        get ecclevel() {
            return x;
        },
        set ecclevel(r) {
            x = r;
        },
        get size() {
            return _size;
        },
        set size(r) {
            _size = r;
        },
        get canvas() {
            return N;
        },
        set canvas(r) {
            N = r;
        },
        getFrame: function(r) {
            return c(r);
        },
        utf16to8: function(r) {
            var o, f, e, a;
            for (o = "", e = r.length, f = 0; f < e; f++) (a = r.charCodeAt(f)) >= 1 && a <= 127 ? o += r.charAt(f) : a > 2047 ? (o += String.fromCharCode(224 | a >> 12 & 15), 
            o += String.fromCharCode(128 | a >> 6 & 63), o += String.fromCharCode(128 | a >> 0 & 63)) : (o += String.fromCharCode(192 | a >> 6 & 31), 
            o += String.fromCharCode(128 | a >> 0 & 63));
            return o;
        },
        draw: function(r, o, f, e, a, t, n) {
            var i = this;
            if (x = n || x, r = r || N) {
                var c = Math.min(f, e);
                o = i.utf16to8(o);
                var l = i.getFrame(o), u = wx.createCanvasContext(r, t), v = Math.round(c / (s + 8)), d = v * (s + 8), h = Math.floor((c - d) / 2);
                c = d, u.setFillStyle("#ffffff"), u.fillRect(0, 0, f, f), u.setFillStyle("#000000");
                for (var g = 0; g < s; g++) for (var C = 0; C < s; C++) l[C * s + g] && u.fillRect(v * (4 + g) + h, v * (4 + C) + h, v, v);
                a && i.drawImg(u, f, a), u.draw();
            } else console.warn("No canvas provided to draw QR code in!");
        },
        drawImg: function(r, o, f) {
            var e = o / 10 * 4, a = o / 5;
            r.globalAlpha = 1, r.drawImage(f, e, e, a, a);
        }
    };
    module.exports = {
        api: Q
    };
}();