import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from 'components/h1'
import H4 from 'components/h4'
import H5 from 'components/h5'

import TEXT from 'components/text'
import { FormattedMessage } from 'react-intl'

const TouristPage = () => {
  const noMargin = { margin: 0 }
  return (
    <Layout>
      <SEO title="camper" />
      <SiteTitle />
      <Content>
        <div style={{ textAlign: 'center' }}>
          <H1 style={noMargin}>
            <FormattedMessage id="tourist_1">
              {/* How to survive in Apulien */}
            </FormattedMessage>
          </H1>
          <H1>
            <FormattedMessage id="tourist_2">
              {/* A selection of the best to know */}
            </FormattedMessage>
          </H1>
          <hr />
          {/* <FormattedMessage id="test">
            {txt => <TEXT>{txt}</TEXT>}
          </FormattedMessage> */}
          <TEXT>
            <FormattedMessage id="tourist_intro">
              {/* Die malerische Küste Apulien erstreckt sich über 750 Kilometer
              Küste und bietet eine schöne Abwechselung zwischen feinen
              Sandstränden und felsigen Eintauchmöglichkeiten. Das Meer
              schimmert größtenteils azurblau und ist glasklar, mehrere hundert
              Meter kann man reinlaufen bis es richtig tief wird und ist daher
              auch der ideale Spielplatz für Kinder. Neben den tollen
              Bademöglichkeiten hat Apulien aber auch tolle Städte zu bieten.
              Eine ist schöner als die andere, Leute die gerne fotografieren
              kommen voll auf ihre Kosten. Es macht unheimlich Spaß abends durch
              die Gassen mit einem Eis in der Hand zu schlendern, einen Rotwein
              zu trinken oder in eines der zahlreichen Restaurants einzukehren.
              Wer zwischen 14 und 17 Uhr auf Entdeckungstour geht, wird außer
              ein paar Katzen nicht viel zu entdecken haben. Die Siesta wird
              überaus ernst genommen. */}
              {/* La Puglia con i suoi 750km di spiagge e i suoi bei paesi sono 
              la cornice ideale in cui passare questo metà giugno e lasciarsi alle 
              spalle un freddo inverno. */}
            </FormattedMessage>
          </TEXT>
          <TEXT>
            <FormattedMessage id="tourist_intro2">
              {/* Da wir stark davon ausgehen, dass der Großteil von euch unsere
              Hochzeit mit einem schönen Italienurlaub verbindet, zählen wir
              hier mal ein paar Städte auf, die im Umkreis von ca 1 Autostunde
              um Martina Franca herum liegen. Je nachdem was euch wichtig ist
              für einen entspannten Urlaub, bietet es sich an eure Ferienwohnung
              zu wählen. */}
              {/* Chi vorrà trattenersi qualche giorno in più o magari approfittare
              dell'occasione per una piccola vacanza qui sotto troverà una piccola lista 
              di città e paesi in un raggio di 50km circa dove crediamo valga la pena 
              sostare o quantomeno passare qualche serata con un buon bicchiere di vino in mano.*/}
            </FormattedMessage>
          </TEXT>
          <H4>
            <FormattedMessage id="tourist_general_H">
              {/* Allgemeine Infos: */}
            </FormattedMessage>
          </H4>
          <TEXT>
            <FormattedMessage id="tourist_general_P">
              {/* Wer möglichst schnell und oft am Meer sein will, aber trotzdem
              abends schöne Essensmöglichkeiten haben möchte, sollte entweder
              Ostuni oder Monopoli ins Auge fassen. Wer ausschließlich am Meer
              sein will und abends eher selbst kochen oder vllt. mal ne Pizza
              essen möchte, der könnte Villanova an der Adriaküste oder eben San
              Pietro am ionischen Meer ansteuern. Direkt am Meer sind die Städte
              nicht so hübsch und auch die Ausgehmöglichkeiten nicht so dolle,
              aber dafür ist man dann eben sehr schnell am Meer. Wem das Meer
              nicht so wichtig ist und auch nicht täglich dorthin möchte, der
              sollte am besten in der Gegend um Martina Franca bzw Ceglie
              Messapica seine Basis suchen. Je nach Budget habt ihr da dann auch
              viele Möglchkeiten: Ihr könnt euch im ländlichen Bereich bspw.
              einen Trulli mit Pool mieten und die Ruhe genießen oder doch
              lieber ein/e Zimmer / Wohnung mitten in der Stadt. Bitte denkt
              daran, dass Italien ein lautes Land ist. Wer direkt an der Piazza
              wohnt, sollte evtl Oropax mitnehmen. Wir können euch für die
              Unterkunftssuche airbnb.de oder booking.com empfehlen. Nun eine
              kurze Beschreibung zu den Städten: */}
              {/* E' bene tenere presente che molto viene offerto e che è consigliabile 
              scegliere dove dormire in base a quello che si preferisce. Se è la spiaggia 
              quello che cercate Ostuni è ideale se si vuole al contempo restare vicini 
              a Martina Franca e avere le spiagge a portata, se invece preferite sonnecchiare durante il giorno e passeggiare
              per i borghi antichi la sera e vivere la notte Locorotondo ha molto da offrire.
              Queste sono naturalmente solo le prime 2 opzioni, continuate a leggere e troverete
              di più. */}
            </FormattedMessage>
          </TEXT>

          <H5>
            <FormattedMessage id="tourist_martina_H">
              {/* Martina Franca */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_martina_P">
              {/* Ca. 50 Tausend Einwohner, sehenswert insbesondere die Altstadt und
              die Kirche San Martino. Da Martina etwas höher liegt, weht im
              Sommer ein angenehmer Wind. Autofahrt zum Meer: ca. 1 h. */}
              {/* Circa 50 mila abitanti, è la città che con la sua bella Basilica ospita il matrimonio. 
              Tutto il borgo antico, la piazza con Palazzo Ducale e dintorni sono la vivace cornice in 
              cui passare piacevoli serate complici i 400m di altitudine che aiutano non poco a 
              sopportare la calura estiva.   */}
            </FormattedMessage>
          </TEXT>
          <br />
          <H5>
            <FormattedMessage id="tourist_locorotondo_H">
              {/* Locorotondo */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_locorotondo_P">
              {/* Noch höher als Martina Franca gelegen und bietet daher einen
              sagenhaften Ausblick über das Valle d’Itria. Eine tolle Altstadt
              und wenig Touristen. Autofahrt zum Meer: ca. 1 h. */}
              {/* Il posto ideale da dove godere di una vista sulla pittoresca la valle d'Itria. 
              La parte antica del paese è un piccolo gioello in cui nelle notti estive si riversa 
              la gioventù locale per rilassarsi nei numerosi Bistro e bar. */}
            </FormattedMessage>
          </TEXT>
          <H5>
            <FormattedMessage id="tourist_ceglie_H">
              {/* Ceglie Messapica */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_ceglie_P">
              {/* Sergios’a Heimatstadt. Wir werden dort unsere Basis haben. Ceglie
              ist berühmt für die gute Küche. Demenstprechend gibt es viele
              Restaurants. Ceglie hat relativ wenig Tourismus, da sie einfach
              später als die Städte drum herum auf die Idee gekommen sind, Geld
              damit zu machen. Daher sind natürlich auch die Preise angenehm
              niedrig und es ist alles sehr authentisch. Autofahrt zum Meer: ca.
              40 Min. */}
              {/* La città di Sergio, qui come noi potete sentirvi a casa. Le cucine 
              sono rinomate, il paese è accogliente e Giorgio adora passeggiare nelle 
              piazzette assolate e disturbare i gatti stesi al sole.*/}
            </FormattedMessage>
          </TEXT>
          <H5>
            <FormattedMessage id="tourist_ostuni_H" _H>
              {/* Ostuni */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_ostuni_P">
              {/* Die weiße Stadt. Eine wirkliche Perle. Nicht am Meer gelegen, aber
              das Meer in Sichtweite. Es gibt viel in der Altstadt zu entdecken,
              mit Kinderwagen nicht geschickt, da viel Treppen zu bewältigen
              sind. Man kann sich gar nicht entscheiden wo man sich zum Essen /
              Trinken hinsetzen soll. Die Cafés/Restaurants sind ein Traum!
              Achtung: Ostuni weiß um ihre Schönheit und zieht die Toursiten
              schon seit langem an. Daher Preise beachten bevor ihr euch
              hinsetzt! Autofahrt zum Meer: ca. 20 Min. */}
              {/* La città bianca. Famosa per il candore delle sue mura, da 20 anni a questa 
              parte conosce il turismo come nessun' altra città nelle vicinanze. Obbligatorio percorrere
              i vicoli e le scalinate del borgo antico in lungo e largo e fermarsi a mangiare nei 
              suoi tipici ristoranti. */}
            </FormattedMessage>
          </TEXT>
          <H5>
            <FormattedMessage id="tourist_alberobello_H">
              {/* Alberobello */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_alberobello_P">
              {/* Heimatstadt der Trullis. Das ist die Stadt für Leute, die gern
              Touristenprogramm abklappern. Die Trullis sind diese niedlichen
              runden Steinhäuser, die zum UNESCO-Weltkulturerbe zählen. In
              Alberobello bestehen ganze Stadtteile aus diesen Schlumpfhäusern.
              Dazwischen findet man jede Menge Grünpflanzen und bunte Blumen,
              ideale Voraussetzungen für ein schönes Fotomotiv. */}
              {/* La città dei Trulli. Qui potete visitare i trulli, le antiche case 
              locali patrimonio dell'UNESCO e sicuramente aggiornare con successo il vostro Instagram.  */}
            </FormattedMessage>
          </TEXT>
          <H5>
            <FormattedMessage id="tourist_monopoli_H">
              {/* Monopoli */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_monopoli_P">
              {/* Die kleine Hafenstaft liegt direkt an der Adria und ist umgeben
              von einer alten Stadtmauer. Auch hier kann man am Meer und in den
              Gassen entlangschlendern, imposante Kirchen besichtigen oder die
              vielen Details bewundern. In Monopli gibt es einen wirklich
              schönen und langen Sandstrand, der als besonders sauber gilt. Von
              Monopli aus sind auch andere viele schöne Sandstrände schnell zu
              erreichen. */}
              {/* Con il suo caratteristico porto Monopoli offre uno dei borghi più interessanti, 
              delle sue viuzze piene di ristoranti e cafè è facile innamorarsi. 
              Il posto perfetto per uscire a bere qualcosa con gli amici e se si ha fame il pesce non manca. */}
            </FormattedMessage>
          </TEXT>
          <H5>
            <FormattedMessage id="tourist_polignano_H">
              {/* Polignano a Mare */}
            </FormattedMessage>
          </H5>
          <TEXT>
            <FormattedMessage id="tourist_polignano_P">
              {/* Diese Stadt ist auf hohen Kalkklippen erbaut und ist besonders
              berühmt für ihren fotogenen Stadtstrand. Die schöne Bucht wurde
              unzählige Male fotografiert und ist deswegen weltberühmt. */}
              {/* Polignano e le sue scogliere di calcare sono ormai di diritto nelle 
              postcard (ospita ogni anno il REDBULL ClIFF DIVING). Qui si viene 
              per l'atmosfera unica che si respira, le sue calette con le spiagge ciottolose 
              e le calli che si affacciano sul mare. Città natale di Domenico Modugno Polignano sa 
              veramente far sognare. */}
            </FormattedMessage>
          </TEXT>
        </div>
      </Content>
    </Layout>
  )
}

export default TouristPage
