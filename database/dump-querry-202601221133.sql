--
-- PostgreSQL database dump
--

\restrict Sid4TV4NfGfrzoE5YZzMlYMTX1SM04hcgodDsAbgXvm28y0tBOIrW0X4wUhfQ5z

-- Dumped from database version 18.1 (Postgres.app)
-- Dumped by pg_dump version 18.1 (Postgres.app)

-- Started on 2026-01-22 11:33:23 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16392)
-- Name: block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.block (
    id integer NOT NULL,
    length_cm numeric,
    width_cm numeric,
    height_cm numeric,
    volume_m3 numeric,
    weight_t numeric,
    class text,
    category integer,
    daily_extraction_id integer
);


ALTER TABLE public.block OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16391)
-- Name: block_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.block_id_seq OWNER TO postgres;

--
-- TOC entry 3838 (class 0 OID 0)
-- Dependencies: 219
-- Name: block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.block_id_seq OWNED BY public.block.id;


--
-- TOC entry 222 (class 1259 OID 16412)
-- Name: daily_extraction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_extraction (
    id integer NOT NULL,
    extraction_date date NOT NULL,
    extracted_mass_tons numeric NOT NULL
);


ALTER TABLE public.daily_extraction OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16411)
-- Name: daily_extraction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_extraction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_extraction_id_seq OWNER TO postgres;

--
-- TOC entry 3839 (class 0 OID 0)
-- Dependencies: 221
-- Name: daily_extraction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_extraction_id_seq OWNED BY public.daily_extraction.id;


--
-- TOC entry 3675 (class 2604 OID 16395)
-- Name: block id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.block ALTER COLUMN id SET DEFAULT nextval('public.block_id_seq'::regclass);


--
-- TOC entry 3676 (class 2604 OID 16415)
-- Name: daily_extraction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_extraction ALTER COLUMN id SET DEFAULT nextval('public.daily_extraction_id_seq'::regclass);


--
-- TOC entry 3830 (class 0 OID 16392)
-- Dependencies: 220
-- Data for Name: block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.block (id, length_cm, width_cm, height_cm, volume_m3, weight_t, class, category, daily_extraction_id) FROM stdin;
154	305	120	95	3.48	32	A	1	128
155	295	115	90	3.05	27	B	1	129
156	240	110	85	2.24	24	B	2	129
157	310	120	100	3.72	33	C	1	130
158	245	110	90	2.43	26	B	2	131
159	320	125	95	3.80	35	A	1	132
160	285	115	90	2.95	29	A	1	132
161	300	120	95	3.42	31	B	1	133
162	270	115	90	2.80	28	B	1	134
163	215	100	80	1.72	20	C	3	134
164	205	95	80	1.56	19	C	3	135
165	310	120	95	3.53	32	B	1	136
166	235	105	85	2.10	23	B	2	136
167	330	130	100	4.29	38	A	1	137
168	260	115	90	2.69	26	B	1	138
169	210	100	80	1.68	20	C	3	138
170	300	120	95	3.42	31	A	1	139
171	280	120	90	3.02	29	B	1	140
172	240	110	85	2.24	24	B	2	140
173	215	100	80	1.72	20	C	3	141
174	325	130	100	4.22	37	A	1	142
175	270	115	90	2.80	27	B	1	143
176	205	95	80	1.56	19	C	3	143
177	245	110	90	2.43	25	B	2	144
178	310	125	95	3.69	33	A	1	145
179	285	120	90	3.08	29	B	1	146
180	235	105	85	2.10	23	B	2	146
181	210	100	80	1.68	20	C	3	147
182	320	130	100	4.16	36	A	1	148
183	245	110	90	2.43	25	B	2	148
184	215	100	80	1.72	20	C	3	149
185	260	125	95	3.10	38	A	1	150
186	230	110	85	2.15	28	B	2	150
187	215	100	80	1.72	42	C	3	151
188	270	130	95	3.33	36	A	1	152
189	245	118	90	2.60	22	B	1	152
190	210	100	80	1.68	10	C	3	152
191	255	120	90	2.75	35	A	1	153
192	225	105	80	1.89	26	B	2	153
193	265	125	95	3.15	40	A	1	154
194	215	100	80	1.72	24	C	3	154
195	235	110	85	2.20	45	B	2	155
196	260	125	95	3.10	39	A	1	156
197	215	100	80	1.72	22	B	3	156
198	230	110	85	2.15	48	C	2	157
199	270	130	95	3.33	38	A	1	158
200	245	118	90	2.60	20	B	1	158
201	205	95	75	1.46	12	C	3	158
202	240	115	85	2.35	34	B	2	159
203	210	100	80	1.68	18	C	3	159
204	270	130	95	3.33	42	A	1	160
205	225	105	80	1.89	24	B	2	160
206	235	110	85	2.20	46	B	2	161
207	260	125	95	3.10	37	A	1	162
208	215	100	80	1.72	22	C	3	162
209	240	115	85	2.35	47	B	2	163
210	265	125	95	3.15	41	A	1	164
211	210	100	80	1.68	23	C	3	164
212	230	110	85	2.15	49	B	2	165
213	270	130	95	3.33	43	A	1	166
214	215	100	80	1.72	24	B	3	166
215	235	110	85	2.20	46	C	2	167
216	265	125	95	3.15	40	A	1	168
217	205	95	75	1.46	18	C	3	168
218	225	105	80	1.89	44	B	2	169
219	255	120	90	2.75	38	A	1	170
220	215	100	80	1.72	22	C	3	170
221	240	115	85	2.35	47	B	2	171
222	270	130	95	3.33	42	A	1	172
223	245	118	90	2.60	20	B	1	172
224	210	100	80	1.68	10	C	3	172
225	260	125	95	3.10	36	A	1	173
226	230	110	85	2.15	22	B	2	173
227	215	100	80	1.72	40	C	3	174
228	270	130	95	3.33	38	A	1	175
229	225	105	80	1.89	22	B	2	175
230	235	110	85	2.20	42	B	2	176
231	255	120	90	2.75	35	A	1	177
232	205	95	75	1.46	20	C	3	177
233	230	110	85	2.15	45	B	2	178
234	265	125	95	3.15	37	A	1	179
235	215	100	80	1.72	22	C	3	179
236	235	110	85	2.20	44	B	2	180
237	270	130	95	3.33	39	A	1	181
238	210	100	80	1.68	20	C	3	181
239	245	118	90	2.60	28	B	1	182
240	215	100	80	1.72	24	B	3	182
241	230	110	85	2.15	44	C	2	183
242	260	125	95	3.10	36	A	1	184
243	225	105	80	1.89	22	B	2	184
244	235	110	85	2.20	43	B	2	185
245	265	125	95	3.15	38	A	1	186
246	210	100	80	1.68	21	C	3	186
247	240	115	85	2.35	46	B	2	187
248	215	100	80	1.72	40	C	3	188
249	255	120	90	2.75	35	A	1	189
250	225	105	80	1.89	24	B	2	189
251	235	110	85	2.20	43	B	2	190
252	265	125	95	3.15	39	A	1	191
253	205	95	75	1.46	18	C	3	191
254	230	110	85	2.15	45	B	2	192
255	255	120	90	2.75	34	A	1	193
256	230	110	85	2.15	20	B	2	193
257	215	100	80	1.72	38	C	3	194
258	265	125	95	3.15	36	A	1	195
259	225	105	80	1.89	20	B	2	195
260	230	110	85	2.15	42	B	2	196
261	270	130	95	3.33	38	A	1	197
262	205	95	75	1.46	18	C	3	197
263	235	110	85	2.20	40	B	2	198
264	255	120	90	2.75	33	A	1	199
265	215	100	80	1.72	20	C	3	199
266	230	110	85	2.15	41	B	2	200
267	215	100	80	1.72	38	C	3	201
268	265	125	95	3.15	36	A	1	202
269	225	105	80	1.89	20	B	2	202
270	235	110	85	2.20	40	B	2	203
271	255	120	90	2.75	32	A	1	204
272	210	100	80	1.68	20	C	3	204
273	230	110	85	2.15	41	B	2	205
274	215	100	80	1.72	38	C	3	206
275	265	125	95	3.15	36	A	1	207
276	225	105	80	1.89	19	B	2	207
277	230	110	85	2.15	38	B	2	208
278	215	100	80	1.72	36	C	3	209
279	225	105	80	1.89	35	B	2	210
280	215	100	80	1.72	34	C	3	211
281	230	110	85	2.15	36	B	2	212
282	215	100	80	1.72	34	C	3	213
283	225	105	80	1.89	34	B	2	214
284	255	120	90	2.75	34	A	1	215
285	230	110	85	2.15	20	B	2	215
286	215	100	80	1.72	38	C	3	216
287	265	125	95	3.15	36	A	1	217
288	225	105	80	1.89	19	B	2	217
289	230	110	85	2.15	40	B	2	218
290	255	120	90	2.75	32	A	1	219
291	210	100	80	1.68	20	C	3	219
292	235	110	85	2.20	38	B	2	220
293	215	100	80	1.72	36	C	3	221
294	265	125	95	3.15	36	A	1	222
295	225	105	80	1.89	18	B	2	222
296	230	110	85	2.15	40	B	2	223
297	215	100	80	1.72	36	C	3	224
298	225	105	80	1.89	34	B	2	225
299	215	100	80	1.72	33	C	3	226
\.


--
-- TOC entry 3832 (class 0 OID 16412)
-- Dependencies: 222
-- Data for Name: daily_extraction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_extraction (id, extraction_date, extracted_mass_tons) FROM stdin;
128	2025-09-01	58
129	2025-09-02	60
130	2025-09-03	62
131	2025-09-04	59
132	2025-09-05	61
133	2025-09-08	60
134	2025-09-09	63
135	2025-09-10	58
136	2025-09-11	64
137	2025-09-12	60
138	2025-09-15	62
139	2025-09-16	61
140	2025-09-17	63
141	2025-09-18	59
142	2025-09-19	60
143	2025-09-22	64
144	2025-09-23	61
145	2025-09-24	58
146	2025-09-25	62
147	2025-09-26	60
148	2025-09-29	63
149	2025-09-30	61
150	2025-10-01	68
151	2025-10-02	65
152	2025-10-03	70
153	2025-10-06	66
154	2025-10-07	72
155	2025-10-08	64
156	2025-10-09	69
157	2025-10-10	65
158	2025-10-13	71
159	2025-10-14	66
160	2025-10-15	72
161	2025-10-16	64
162	2025-10-17	69
163	2025-10-20	65
164	2025-10-21	70
165	2025-10-22	66
166	2025-10-23	73
167	2025-10-24	64
168	2025-10-27	71
169	2025-10-28	66
170	2025-10-29	72
171	2025-10-30	65
172	2025-10-31	74
173	2025-11-03	60
174	2025-11-04	58
175	2025-11-05	62
176	2025-11-06	59
177	2025-11-07	61
178	2025-11-10	58
179	2025-11-11	62
180	2025-11-12	59
181	2025-11-13	60
182	2025-11-14	63
183	2025-11-17	58
184	2025-11-18	61
185	2025-11-19	59
186	2025-11-20	62
187	2025-11-21	60
188	2025-11-24	58
189	2025-11-25	61
190	2025-11-26	59
191	2025-11-27	62
192	2025-11-28	60
193	2025-12-01	56
194	2025-12-02	55
195	2025-12-03	57
196	2025-12-04	56
197	2025-12-05	58
198	2025-12-08	55
199	2025-12-09	56
200	2025-12-10	57
201	2025-12-11	55
202	2025-12-12	58
203	2025-12-15	55
204	2025-12-16	56
205	2025-12-17	57
206	2025-12-18	55
207	2025-12-19	56
208	2025-12-22	54
209	2025-12-23	55
210	2025-12-24	53
211	2025-12-25	52
212	2025-12-26	54
213	2025-12-29	53
214	2025-12-30	52
215	2026-01-02	55
216	2026-01-05	54
217	2026-01-06	56
218	2026-01-08	55
219	2026-01-09	56
220	2026-01-12	54
221	2026-01-13	55
222	2026-01-14	56
223	2026-01-15	55
224	2026-01-16	54
225	2026-01-19	53
226	2026-01-20	52
227	2026-01-02	41
\.


--
-- TOC entry 3840 (class 0 OID 0)
-- Dependencies: 219
-- Name: block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.block_id_seq', 301, true);


--
-- TOC entry 3841 (class 0 OID 0)
-- Dependencies: 221
-- Name: daily_extraction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_extraction_id_seq', 227, true);


--
-- TOC entry 3678 (class 2606 OID 16400)
-- Name: block block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.block
    ADD CONSTRAINT block_pkey PRIMARY KEY (id);


--
-- TOC entry 3680 (class 2606 OID 16422)
-- Name: daily_extraction daily_extraction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_extraction
    ADD CONSTRAINT daily_extraction_pkey PRIMARY KEY (id);


--
-- TOC entry 3681 (class 2606 OID 16423)
-- Name: block fk_daily_extraction; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.block
    ADD CONSTRAINT fk_daily_extraction FOREIGN KEY (daily_extraction_id) REFERENCES public.daily_extraction(id);


-- Completed on 2026-01-22 11:33:23 CET

--
-- PostgreSQL database dump complete
--

\unrestrict Sid4TV4NfGfrzoE5YZzMlYMTX1SM04hcgodDsAbgXvm28y0tBOIrW0X4wUhfQ5z

