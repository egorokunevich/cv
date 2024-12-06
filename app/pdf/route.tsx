import { Document, Page, View, renderToStream } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';

import AsidePDF from './componentsPDF/AsidePDF';
import HeaderPDF from './componentsPDF/HeaderPDF';

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={{ padding: '20px' }}>
      <View style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <HeaderPDF />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <AsidePDF />
        </View>
      </View>
    </Page>
  </Document>
);

export const GET = async () => {
  const stream = await renderToStream(<MyDocument />);
  return new NextResponse(stream as unknown as ReadableStream);
};
