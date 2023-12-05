/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 300,
    "height": 300,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 150,
    "height": 150,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 75,
    "height": 75,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAklEQVR4AewaftIAAAuUSURBVO3BC5DcdWHA8e/v93/t7u3t3vs2d5fLJblLcqQXIJFX0gkvBY0JBikZRSPQ0bbYlqnakZlOnaotI4JOa6WDijiIBULBEkJFo0ALFJKAkKR5EMiFJPe+3O3u3T7///2/epsmNCSmYvW/WWby+XDWWWedddZZZ511ViAE7w3XzerovN4IR+YpUml2PTdpFQv7R4cGvg88Q4UIqltt2+yuh6O1sas0Xdc4iWWa+emp9D9MjA3/NRWgUMU65sx7Ol7f8H5FVRVmuK6L49hIqSCEQFVVXTdCF5tmcdouWS8TMIUq1Zxo+2ZdQ+PHpJSUSafEde2CqzujzFJLjGZKWFJFmaEbRs9UavLbBExSpWpj8esVRaHMdV3WtkvmNkbRVUl3U5RPLIzS5BUo03SjG/g4AZNUp3Wars/mmB69xNzGKGWW45LMm3i+z9r5UXzbQtM0YnX1FxIwlSoUq6u/WFU1ynxgPDmJ69WhSMHhVI63klmkECxsibOyEV7IgKppKgFTqULhmmgTxzh2iRuWzkGRgrIFLXHqIwYNEQNFCjw/hzflkZueHiFgkipUzOeSHGOXSgje6YUD40wXS5RFDZXlUdMvlayXCJikCmWm0i/atk3ZeXUatSGdE13ek6AuolPWHA1xfltMAOcRMEl1esxx7IPMaA4JJnMmJ6qPGEghKEvmzfxrg5MbgG8RMEmVymWmn/N8j5aIJBbSOJTMciRbpMzzfY7rn8hs+cG2/o9TAQpVKp/LbhFCzL98Trw7a9rCcrztJdcbeHVwMlsX0ZsjusrgVJ5HDlpkplJPANMETKF65Qu57L+0x8N9Pc2x3/N8P6wqMrqwNT43HtJJ5S0eP1xChGrqSyXLs8zizwmYQpXbOZx+NBELXzSvKdbXEDGiqhQMTuV5qL+ArUcom06nnitZ5jMETOE9YPtQ6sH5TbFbi7YTzpg2s2JhXh5IU/Twi8XC1omxkT8DigRMocqFJR+7ZsmcB3oTdXPb62pEXVgnXSjROzXMmr5lovcPbjAO/eezTWnb/RkBU6huV925IHx/Jlo/tzdRJ5hhux7Z/sNcEimRvfpG6p5+omZ9zfiFr+fcwrDlv0SAJFVs9drr7uiY1VsXt4pM5EzGs0XG+gdZaeQ5+BffR9FDdKVepV4VYn2bcSUBU6lSa5q1OxOTI+cnP3UrC753Ox2D+9hi1bP4C7czbJnoE0foe+SvQHJUWKGGgKlUJ7VVF5+4xnyL0fFh3NXr2RGppbO5Bf/Jh/HTR+jIHQCFt6mCEAFTqQDf91syk8WbBg8lLzi8L2UJhKu4SlZRpT+/r7lYmLZZeEmLq6iSGUeeePzx2famh9rme1k6/uunbB2b4ALp4JsOrSLF/oJHY0RyopIv8gRMJSBT0/6t+3ZnL9uz5bVFj37n5a6Nd+8JX3ZjF09+cT8numB9O6/8aJjjamZrSFVw6W338Lfbm6htgugCGA7DDXyDPY9+mXlhyckmLC9JwFQC8q+b+NyhfU7X9tvfYPktHWT32Lwb+UGbsuFBhdcP8g7rLoasAwe0Xkbic8hF6vjI4AYKHnx3yNxKwFSC4nOKSETntzEt4K1ugVyxmCebb8HNpBHPHWL2my+OHzb9uwmYSgVEWhV+F9yow/sOw3bytC96lZTiEF62nT/fXHwIKBIwlQpQDH4nfGBPopuu4ec599BTjFie/2bBfSyb9z9PBUiqlGOrnCylSGY1RLHnz2NQjdGsi9F/HLDWUSEqAeloB8VRCf9xB4nGBi66yaGlNc7yWzo4UVdPE1pUcLKWBQqranmboRV4c+c2WoEjA2Os0rJsN/1BKkglINteQ9pTDtu/O0Tt1xS23T9M1/vqeOmeId7hFnjpniFOds4XPDbv4m2t+WdZ1zmO64Nh2ygq9Bfcg1SQynvE0ujDCCFQBDSrPpYPD46WdlNBkiqlapLjHGuc5kg/ZTnLZpY9Rdr2GTD9jVSQJCAhg9+KVBSO850ksZBGWTGVIaEJPI4apYIkAUm0wPzeKCu+tIKm5npkreD/q12OI4XA933aM0nKIopgxioqSCUghwbB0DQ2bFvMpzvggtuW0NhV5PJv9iCEoCyTVmmbq3J+g0PJ0vB9kFKg6ipze3XW1kI0DGJUwgBM5ExWKkXK8k4H1zSKFZuSe/+ZClEJkBQcZZrw2PMhEp0hHtjMO3y0Fja9wilWR+DfnuOo1dFx6kOgZ3KUPJ9+5zKWqr3cnJjs25TcS6VIzrCIwa9UF+VtMeUgZa25FK92COxVKUJSo1GL9FBBKhUUjfAbE/jElBfJmiU6KbJoTDByaBe72c+opbYAVwObqQBJQC5axsttCUqcQFH4jbilFOfa30GXaYQQeIAKdIZgbshkeTzHuoS2hgqRBOSqK8T1H/ogf/i5m9hthDiqYPKuJQ9v5qPhP2XlrIcoixoaozLGya5o0BZTIQoB+vodX9m18cdfueeuu75sRHUW6gY1qSTM74C+HrhkCczuIBeLkJnXmnFWzR03rlqSZkXnCKa5kcLIFhQpCGkKvu+TmcrRJUxOlHdxHhu3v00FCCrE9/1uYBVwGDgCDAshBjjmGwvDT3ygXr2GY0ZKgh31s2lqjuN6PtmBUS71kxgCjtg+DZrA82HI9Mav3ZlPUAGCKnHv4pr/uLBWXjrtQt71MSQYUnDQjaAJj4WqiQD22C383bW3o44PcH3sDhKPW+5n9uZbgSQBU6kSUYXE0/U+yso4azbeSNa12Fd4jb7oLzlu0vW59/LPYLTPwwQS+1y6I0IBrgYeImCSKmEIoouyguj+hYQVjYQeIy662dUqOG4gCh+I/D19L27i88//iKX9Hg2q4IKYspQKUKkSmhCNHQ5oO3bxVLFAu9bHG+sfJ5tS6Bt3KFtaFPDzAh/mW5xobYs+55VMkaCpVIeluiTEjFbdpEnfQ87dw9JHIarwa7UYspUKUKkCcZUr4prgOAWIK7xrcYU2KkBSBWKr/+j8O1d8lZ8kruXXSTuCN/JLsPlfmqSBCpBUgVDPuYmDfSv44TkreTbBafUX5lCy17E8eiWvT6/h+VU6E45PRIp6YAkBk1SBj7ywQW/f+QIfGrsPY5ZCyecUO1WfqRskc0Mt6FJF7bEJmT4RKajXBIZgFQFTqQItyV+m12/dwdsEp0gU4MDYINuyb6LJafRsjmVHbBTJUZ9s07vuGy4RJJUq8MX9xe/NMiLLFtUobbrgV2rVBa1bHYht5kSTts+o5e0/kHf7CZigejSsalJvu2xO4rMJxY+GrAy1io8AVAGODz4w7UocI8qUHuawI9J3be3/LLCBClCpHqmnJp3bVlzcst6JRaI5YPvE9M6v/WLXdUAncAjI/M0Hz9s6pyHaHQHqMgUT2ECFSKrYWKZ4ADgA/DtwEEhO5sw3OEMkVcb38Zjheh5P7R3azUl++vrwDsfzOBMkVcYHlxnTRZvxrPkUJ3krmX1kuljyOAMkVcp03BSwjVPtMm13lBlSiAgVJKkuq33fjzDD8bwkp5GznAFmCCpLpQroRuhPPrW08+ZFLfHzG2oMjRljmeIwp5EqWCP8Dw24EniGClA5g5prjJtuvrjnL39yqLh4XmOUhhqDvGUzVSyxce+4xWkUbSfGjJbacOSONcueHJrKb71/W/+PcyXnnwiQyhl040XdXzU0dbYbiXHvGwU8P4/rOljFYiqVzd3HaTw9amuKMkFLbZiIRrizIXr5JYu6L8vlszdvOTB8K/ASAVA4c2rH/NovHcx6erFYoE11yRfy6WzB/FnyyNgtvuf9gtMQUjamjYb3706V5IEpm/1pmwkRFr/farQtaqk9Z+dI+j4CoHDmlKaz2WGMcKZoWdv2D43+MDWd+WSxkH8QGOb/ULLMLaqqNYdC4V5fCxkNqo8sZnkt7WCZpcJwOnM3ARC8t/XG4vWfjjc0nqMoSo3ve87Y0OADlmXez1ln1n8DyPaJRqwTVrUAAAAASUVORK5CYII="
  },
  {
    "width": 38,
    "height": 38,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAklEQVR4AewaftIAAATVSURBVO3Be2hVdQDA8e/vd8495752N7c7N3VuTpua79IUIkymGdmIEssIeln9EREUEfSgKHpAgmEPSoogpIzMrPABPkmMTMus+Uy3qbtzj7vd7Xrf5557zslJ/RMFnbvbH4GfD1dc8R8TlJbW2DT1I03Tb0CIoG1Z7UODsRcH+rp34pJCCU2cPO0rn99/50SvUzG7Qvp7TaVO1b0LBvv73sUlSenM1HRtaUDYtEzwMWe0zoo6iaook4NloZW4JCmRqpraZkVR9Qa9gK5K+pJZPNJhdtBBqkoAlyQlYmSzPbZt0xjyIITA71Gp9OtcU+1xEkND53BJUiKpxMWNllWIlHkgmctTFdDxKJJ4JrcF2ItLkhIaHOh/ziMZGMzk2wYzRuZ8PMfGiOWjCJISGujr+aStP/F0QFMbpBD+jR1pByFyFEFSWk2BXO7Jcp+mqpbFs3OmiReunXHN/DK5EJckJXTPohvXNs1cOCvXOyjCU5oJzrqOme3b6lbV6S24pOKS4ziBjhPRB0793Bvw2Gp6wtSwMWletX38aKvZ9vxji41QAGvuMoI/7mZcrgMV0KTQcEnFhfXr0wdWP7V9RjKVC/76wQDD6heH6NyTQBstGX/fTrpifpYHj2CnNnGhcj7jEz9wPGm14ZLEhWg/U3sjyaBHU/irfNQmHhe0XYBoGtqnNfHGkkfZNbk+sqbTWIdLKi55ygT/xHEEw3IeKI8P8sinDxlHhjLPAAVcUnEhGBDCrgzi9XlobAkxrKYuiOLjMl+NxNEgmzyO33KY7DF7HozkN1AEFRd6ow6ZwRQBv87ZrQkua4GzWxMMq6iG1kieueUfU2EXMB26KJLEhaqwQlVtmH+iKBLNihHUcoQvxnAQJkVScSGV0+k2m2mYZNDwRAHTFITCkvKwRErB2AaFWl+WbCSPr1CBYS0cD59TDBUXBGDZEEvofHdCZ9j1XjjWzWXBUaCe76PCSBOrzxJqL9QDTcAZXJK4MG0K39RUk1YU/pYv8xOTtPdxEDR1DVCj79Bevcq7kiIouPDZhpe/fvedlw7nTUar0DlvOm31dbQ2Z7aGV4z+PpDvXouu9qIlU4zKJ0GAIkTPxj5zMy4JSmDT9YGe8jELatWzCrZymJDM897i1QSM0yzc9eHeu1rTi3FJpQTKTVFuD5VhNVZiOAfx9sIt575k7PluDJUaiqAyQiGF5pDAp6f3YKQgLEAAU9oPMqwgRJgiSEao6uFXblyz5E0SXvAKEEDWLiNh3kr3mCZsqARqcUkyQvce/EK/7cw28Ar+1DZDoFKJIVVCKp7bq9UWXFIYoX29fV33e7qutk1fg2UXZAGoiBpk5UnMTNaMZ7Pb9sXMLecMpxMXBCXyzooFCct2hp7YfOgmIPbW8gWtUlL2+KaDIYogKRUHx7TsCHAaiOUtq4MRkJTGVAdE1rQ6+UMyZ54SCA9FUhiBsF+bu3T6xHWr5k98TVOV0P6O6Pbfohd3c0ljVfC6hsqyRXPGjWo63DnQY9pOFy4ojMCyWZPezgrtjm8jKbnjXPzQL2e7X3ccJ8olFyzftXlL3OwgZldVVN49f1wwebQnfoh/SWEETvbF2y866unOrq5XU4n4S47jRPlDJpU8kPONCscMEerPGFYibRzriSf383/3O+4r5rZyhalTAAAAAElFTkSuQmCC"
  },
  {
    "width": 19,
    "height": 19,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAklEQVR4AewaftIAAAH7SURBVM3BO0wTAQAG4P/e17s+QilNpZZEqEY0ITRakUkj4OIicXER42iCk4OTCQyaaIwOLLoZDHFw1BCNEdtFoxYW2wYiYktSm6utrVzLPXp32JnctU1c/D78twh04dDh4ZmAwN7x0oSQbxj3N9fT92CDRBc4nrs2EWIOTvXT/gEXeQEOSHTBsvbqfp6Az8XgbIjKwQGJLvwuS7f1pvE1X1PNp1vaNhyQ6MLk0SMxgXIPDkfj1MKAdxwOaNhYXGxclzKJSxtfKmIg7DLdJhPhe1kxuHYLPm3LCwc0bJR+YapaUSakFQXaqAUtNIIA2Y9qdMwiNP0VUhuwQ8MeIbpZ+Mc4eAMsVA8N2spjqJAsX37/bR4OaNggGBaGeAxmqAZNYGDyfejZTaJH9lhog4QNnqd/KsyQmVZOoMKOoN50I9BYhUswgnOD3CQcULCx/HJ+efbGnCRyyJ5Rn6undh4P+uTXkCKniQPVbO6F1EzABoEOEifFN5Qnfp62UjCpCPTa9rNza40Z2CDRwUpstpc1UjAZHioRBUkgDAckOhj9tPAkz4XrezXlbYncbBR1awn/oO/hxXgWLY+m4xm0QaON6Vj0isCyDwo72me0FOSmfHX8+AdD3725tPrjI/ah0Ma6VCsXdTL5Lv39LloK8JbKqhWsykqm+EfOYZ+/pMO6PnJfYUoAAAAASUVORK5CYII="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;