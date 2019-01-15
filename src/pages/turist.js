import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from 'components/h1'
import TEXT from 'components/text'

const DetailsPage = () => {
  const noMargin = { margin: 0 }
  return (
    <Layout>
      <SEO title="camper" />
      <SiteTitle />
      <Content>
        <div style={{ textAlign: 'center' }}>
          <H1 style={noMargin}>How to survive in Apulien</H1>
          <H1>A selection of the best to know</H1>
          <hr />

          {/* <h4>Toys R Us</h4>
          <p style={noMargin}>123 Abc Ave</p>
          <p style={noMargin}>Portland, OR 97205</p>
          <p>(800) 123-1234</p> */}

          <h4>Where the hell is Martina Franca</h4>
          <p style={noMargin}>Strada per Noci</p>
          <p style={noMargin}>MArtina Franca, TA</p>
          <p>(+39)123456789</p>
          <hr />
          <h4>Whaaaat? Are you crazy?...no way i will able to get there!</h4>

          <TEXT>
            Apulien Zwischen feinen Sandstränden und azurblauem Meer gibt es
            auch wunderschöne kleine Städte, die es in Apulien zu entdecken
            gilt. Eine ist schöner als die andere, Leute die gerne fotografieren
            kommen voll auf ihre Kosten. Alle Städte, die wir aufzählen, laden
            zum flanieren ein. Es macht unheimlich Spaß abends durch die Gassen
            zu schlendern, einen Rotwein zu trinken, eine leckere Pizza zu essen
            oder einfach nur am Eis zu schlotzen. Wer zwischen 14 und 17 Uhr auf
            Entdeckungstour geht, wird außer ein paar Katzen nicht viel zu
            entdecken haben. Die Siesta wird überaus ernst genommen. Es hat in
            der Zeit wirklich nichts offen!
          </TEXT>
          <TEXT>
            Hier mal eine Auswahl der Städte, die im Umkreis bis ca 1 Stunde
            Autofahrt um Martina Franca herum liegen und eine kurze Beschreibung
            dazu.
          </TEXT>

          <TEXT>
            Martina Franca: ca. 80 Tausend Einwohner, sehenswert insbesondere
            die Altstadt und die Kirche San Martino. Da Martina etwas höher
            liegt, weht im Sommer ein angenehmer Wind. Autofahrt zum Meer: ca. 1
            h.
          </TEXT>
          <TEXT>
            Locorotondo: Hübsche Stadt - noch höher als Martina Franca gelegen
            und daher noch mehr Wind  Viele Trullis und eine tolle Altstadt.
            Autofahrt zum Meer: ca. 1 h.
          </TEXT>
          <TEXT>
            Ceglie Messapica: Sergios’a Heimatstadt. Wir werden dort
            übernachten. Ceglie ist berühmt für die gute Küche. Demenstprechend
            gibt es viele Restaurants. Ceglie hat relativ wenig Tourismus, da
            sie einfach später als die Städte drum herum auf die Idee gekommen
            sind, Geld damit zu machen. Daher sind natürlich auch die Preise
            angenehm niedrig und alles sehr authentisch. Autofahrt zum Meer: ca.
            40 Min.
          </TEXT>
          <TEXT>
            Ostuni: Die weiße Stadt. Eine wirkliche Perle. Nicht am Meer
            gelegen, aber das Meer in Sichtweite. Es gibt viel in der Altstadt
            zu entdecken, mit Kinderwagen nicht geschickt, da viel Treppen zu
            bewältigen sind. Man kann sich gar nicht entscheiden wo man sich zum
            Essen / Trinken hinsetzen soll. Die Cafés/Restaurants sind ein
            Traum! Achtung: Ostuni weiß um ihre Schönheit und zieht die
            Toursiten schon seit langem an. Daher Preise beachten bevor ihr euch
            hinsetzt! Autofahrt zum Meer: ca. 20 Min.
          </TEXT>
          <TEXT>
            Alberobello: Heimatstadt aller Trullis. Das ist die Stadt für Leute,
            die gern Touristenprogramm abklappern.
          </TEXT>
          <TEXT> Monopoli Locorotondo Cisternino</TEXT>
          <TEXT>Polignano a Mare Schöne Strände Unterkünfte</TEXT>
        </div>
      </Content>
    </Layout>
  )
}

export default DetailsPage
