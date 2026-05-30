import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, Camera, Truck, Activity, TrendingUp } from "lucide-react-native";

import Header from "@/src/components/Header";
import RotatingHeadline from "@/src/components/RotatingHeadline";
import { useTheme } from "@/src/theme/ThemeContext";
import { TRADES, FEATURES, STATS } from "@/src/data/content";

const FONT = {
  display: "Orbitron_800ExtraBold",
  displayBlack: "Orbitron_900Black",
  mono: "JetBrainsMono_500Medium",
  monoBold: "JetBrainsMono_700Bold",
  body: "PlusJakartaSans_400Regular",
  bodyBold: "PlusJakartaSans_600SemiBold",
};

function Overline({ code, label }: { code: string; label: string }) {
  const { colors } = useTheme();
  return (
    <View style={s.overline}>
      <View style={[s.tick, { backgroundColor: colors.accent }]} />
      <Text style={[s.overlineCode, { color: colors.accent, fontFamily: FONT.monoBold }]}>
        {code}
      </Text>
      <Text style={[s.overlineLabel, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
        // {label}
      </Text>
    </View>
  );
}

function SectionHeader({
  code,
  eyebrow,
  title,
  subtitle,
}: {
  code: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const { colors } = useTheme();
  return (
    <View style={s.sectionHeader}>
      <Overline code={code} label={eyebrow} />
      <Text style={[s.sectionTitle, { color: colors.textPrimary, fontFamily: FONT.displayBlack }]}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={[s.sectionSubtitle, { color: colors.textSecondary, fontFamily: FONT.body }]}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

export default function Home() {
  const { colors, mode } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.surface}
      />
      <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.surface }}>
        <Header />
      </SafeAreaView>

      <ScrollView
        testID="main-scroll"
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 48 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View style={s.hero}>
          <View style={s.heroGrid}>
            {Array.from({ length: 4 }).map((_, r) => (
              <View key={r} style={[s.heroGridLine, { backgroundColor: colors.border, top: 40 + r * 60 }]} />
            ))}
          </View>

          <Overline code="SYS // 001" label="CONSOLIDATED OPERATIONS LAYER" />
          <View style={{ height: 16 }} />
          <RotatingHeadline />
          <View style={{ height: 6 }} />
          <Text style={[s.heroStatic, { color: colors.textPrimary, fontFamily: FONT.displayBlack }]}>
            OPERATIONS LAYER
          </Text>

          <View style={{ height: 20 }} />
          <View style={[s.heroAccentBar, { backgroundColor: colors.primary }]} />
          <View style={{ height: 16 }} />
          <Text style={[s.heroSub, { color: colors.textSecondary, fontFamily: FONT.body }]}>
            Premium operations suite for commercial &amp; residential trades. Unifies CRM, scheduling,
            field operations, and accounting into a single real-time ledger.
          </Text>

          <View style={{ height: 24 }} />
          <View style={s.ctaRow}>
            <TouchableOpacity
              testID="hero-request-demo-btn"
              activeOpacity={0.85}
              style={[s.primaryBtn, { backgroundColor: colors.primary }]}
            >
              <Text style={[s.primaryBtnText, { color: colors.primaryFg, fontFamily: FONT.monoBold }]}>
                REQUEST DEMO
              </Text>
              <ArrowRight size={14} color={colors.primaryFg} strokeWidth={2.5} />
            </TouchableOpacity>
            <TouchableOpacity
              testID="hero-secondary-btn"
              activeOpacity={0.7}
              style={[s.secondaryBtn, { borderColor: colors.borderStrong }]}
            >
              <Text style={[s.secondaryBtnText, { color: colors.textPrimary, fontFamily: FONT.monoBold }]}>
                WATCH PITCH
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 28 }} />
          <View style={[s.heroBadgeRow, { borderColor: colors.border }]}>
            <View style={s.heroBadge}>
              <View style={[s.statusDot, { backgroundColor: "#22c55e" }]} />
              <Text style={[s.heroBadgeText, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
                SYNCED
              </Text>
            </View>
            <View style={[s.heroBadgeDivider, { backgroundColor: colors.border }]} />
            <View style={s.heroBadge}>
              <View style={[s.statusDot, { backgroundColor: colors.accent }]} />
              <Text style={[s.heroBadgeText, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
                COMPLIANT
              </Text>
            </View>
            <View style={[s.heroBadgeDivider, { backgroundColor: colors.border }]} />
            <View style={s.heroBadge}>
              <View style={[s.statusDot, { backgroundColor: colors.primary }]} />
              <Text style={[s.heroBadgeText, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
                LIVE FEED
              </Text>
            </View>
          </View>
        </View>

        {/* DIVIDER */}
        <View style={[s.sectionDivider, { borderColor: colors.border }]} />

        {/* TRADES */}
        <View style={s.section}>
          <SectionHeader
            code="SEC // 02"
            eyebrow="TRADES FOUNDATION"
            title={"TAILORED SOLUTIONS\nFOR EVERY CORE TRADE"}
            subtitle="One platform, deep vertical playbooks. Every trade ships with its own compliance forms, telemetry, and certifications baked in."
          />
          <View style={{ height: 20 }} />

          {TRADES.map((trade) => {
            const Icon = trade.icon;
            return (
              <View
                key={trade.id}
                testID={`trade-${trade.id}`}
                style={[
                  s.tradeCard,
                  { backgroundColor: colors.surface, borderColor: colors.border, borderLeftColor: colors.accent },
                ]}
              >
                <View style={[s.tradeIconBox, { borderColor: colors.border, backgroundColor: colors.surfaceAlt }]}>
                  <Icon size={22} color={colors.primary} strokeWidth={2} />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={s.tradeTitleRow}>
                    <Text style={[s.tradeCode, { color: colors.accent, fontFamily: FONT.monoBold }]}>
                      {trade.code}
                    </Text>
                    <Text style={[s.tradeTitle, { color: colors.textPrimary, fontFamily: FONT.display }]}>
                      {trade.title.toUpperCase()}
                    </Text>
                  </View>
                  <Text style={[s.tradeDesc, { color: colors.textSecondary, fontFamily: FONT.body }]}>
                    {trade.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* DIVIDER */}
        <View style={[s.sectionDivider, { borderColor: colors.border }]} />

        {/* FIELD DOCUMENTATION FEATURE STRIP */}
        <View style={s.section}>
          <SectionHeader
            code="SEC // 03"
            eyebrow="FIELD INTELLIGENCE"
            title={"CONQUER COMPLEX\nFIELD DOCUMENTATION"}
            subtitle="Empower technicians with high-density data, checklists, and real-time photo telemetry from any job site."
          />
          <View style={{ height: 18 }} />

          <View
            style={[
              s.bigFeature,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <View style={s.bigFeatureHeader}>
              <Camera size={18} color={colors.primary} strokeWidth={2.25} />
              <Text style={[s.bigFeatureCode, { color: colors.accent, fontFamily: FONT.monoBold }]}>
                FEAT // 001
              </Text>
            </View>
            <Text style={[s.bigFeatureTitle, { color: colors.textPrimary, fontFamily: FONT.displayBlack }]}>
              ZERO-TRIP CLOSEOUTS
            </Text>
            <Text style={[s.bigFeatureDesc, { color: colors.textSecondary, fontFamily: FONT.body }]}>
              Capture geo-tagged, time-stamped site photos. Assembled and submitted as the crew leaves
              the site. Closeout packages approved by clients in minutes — zero return trips for
              missing photos.
            </Text>
          </View>

          <View style={{ height: 14 }} />

          <View
            style={[
              s.bigFeature,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <View style={s.bigFeatureHeader}>
              <Truck size={18} color={colors.primary} strokeWidth={2.25} />
              <Text style={[s.bigFeatureCode, { color: colors.accent, fontFamily: FONT.monoBold }]}>
                FEAT // 002
              </Text>
            </View>
            <Text style={[s.bigFeatureTitle, { color: colors.textPrimary, fontFamily: FONT.displayBlack }]}>
              TECHNICIAN SYNCHRONIZATION
            </Text>
            <Text style={[s.bigFeatureDesc, { color: colors.textSecondary, fontFamily: FONT.body }]}>
              Smart Dispatch with drag-and-drop scheduling synced to live GPS telemetry. Deploy crews
              based on skill, location, and SLA urgency — and watch technician utilization climb.
            </Text>
          </View>
        </View>

        {/* DIVIDER */}
        <View style={[s.sectionDivider, { borderColor: colors.border }]} />

        {/* PLATFORM OFFERINGS GRID */}
        <View style={s.section}>
          <SectionHeader
            code="SEC // 04"
            eyebrow="PLATFORM OFFERINGS"
            title={"DEEP-DIVE\nPLATFORM OFFERINGS"}
            subtitle="Fourteen tightly integrated modules. One real-time ledger from lead capture to payroll."
          />
          <View style={{ height: 18 }} />

          <View style={s.featureGrid}>
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <View
                  key={f.id}
                  testID={`feature-${f.id}`}
                  style={[
                    s.featureCard,
                    { backgroundColor: colors.surface, borderColor: colors.border },
                  ]}
                >
                  <View style={s.featureHead}>
                    <Icon size={16} color={colors.primary} strokeWidth={2.25} />
                    <Text style={[s.featureCode, { color: colors.accent, fontFamily: FONT.monoBold }]}>
                      {f.code}
                    </Text>
                  </View>
                  <Text style={[s.featureTitle, { color: colors.textPrimary, fontFamily: FONT.display }]}>
                    {f.title.toUpperCase()}
                  </Text>
                  <Text
                    numberOfLines={4}
                    style={[s.featureDesc, { color: colors.textSecondary, fontFamily: FONT.body }]}
                  >
                    {f.description}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* DIVIDER */}
        <View style={[s.sectionDivider, { borderColor: colors.border }]} />

        {/* STATS */}
        <View style={s.section}>
          <SectionHeader
            code="SEC // 05"
            eyebrow="PERFORMANCE GAINS"
            title={"MEASURABLE\nPERFORMANCE GAINS"}
            subtitle="What enterprise operators are reporting after 90 days on ClearView."
          />
          <View style={{ height: 18 }} />

          {STATS.map((stat, idx) => (
            <View
              key={stat.label}
              testID={`stat-${idx}`}
              style={[s.statCard, { borderColor: colors.border, backgroundColor: colors.surface }]}
            >
              <View style={s.statHead}>
                <TrendingUp size={14} color={colors.accent} strokeWidth={2.25} />
                <Text style={[s.statHeadText, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
                  METRIC {String(idx + 1).padStart(2, "0")}
                </Text>
              </View>
              <Text style={[s.statValue, { color: colors.primary, fontFamily: FONT.displayBlack }]}>
                {stat.value}
              </Text>
              <Text style={[s.statLabel, { color: colors.textPrimary, fontFamily: FONT.monoBold }]}>
                {stat.label.toUpperCase()}
              </Text>
              <Text style={[s.statDetail, { color: colors.textSecondary, fontFamily: FONT.body }]}>
                {stat.detail}
              </Text>
            </View>
          ))}
        </View>

        {/* DIVIDER */}
        <View style={[s.sectionDivider, { borderColor: colors.border }]} />

        {/* DASHBOARD PREVIEW */}
        <View style={s.section}>
          <SectionHeader
            code="SEC // 06"
            eyebrow="DASHBOARD PREVIEW"
            title={"ONE POWERFUL\nINTERFACE"}
            subtitle="The ADMS ClearView dashboard — real-time field telemetry, schedules, and financials on a single canvas."
          />
          <View style={{ height: 18 }} />

          <View style={[s.screenFrame, { borderColor: colors.borderStrong, backgroundColor: colors.surface }]}>
            <View style={[s.screenChrome, { borderBottomColor: colors.border, backgroundColor: colors.surfaceAlt }]}>
              <View style={[s.chromeDot, { backgroundColor: colors.primary }]} />
              <View style={[s.chromeDot, { backgroundColor: colors.accent }]} />
              <View style={[s.chromeDot, { backgroundColor: colors.borderStrong }]} />
              <Text style={[s.chromeText, { color: colors.textSecondary, fontFamily: FONT.mono }]}>
                clearview / live
              </Text>
            </View>
            <Image
              source={require("../assets/images/adms-clearview-dashboard.png")}
              style={s.screenImg}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* FOOTER CTA */}
        <View style={[s.footerCta, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Overline code="END // OF // FEED" label="ALLIED DATA SOLUTIONS" />
          <View style={{ height: 14 }} />
          <Text style={[s.footerTitle, { color: colors.textPrimary, fontFamily: FONT.displayBlack }]}>
            UNCOMPROMISING{"\n"}VISIBILITY.
          </Text>
          <View style={{ height: 12 }} />
          <Text style={[s.footerSub, { color: colors.textSecondary, fontFamily: FONT.body }]}>
            Our enterprise operations team will contact you shortly to authorize credentials and
            schedule a demo.
          </Text>
          <View style={{ height: 22 }} />
          <TouchableOpacity
            testID="footer-request-demo-btn"
            activeOpacity={0.85}
            style={[s.primaryBtn, s.primaryBtnFull, { backgroundColor: colors.primary }]}
          >
            <Text style={[s.primaryBtnText, { color: colors.primaryFg, fontFamily: FONT.monoBold }]}>
              REQUEST DEMO
            </Text>
            <ArrowRight size={14} color={colors.primaryFg} strokeWidth={2.5} />
          </TouchableOpacity>

          <View style={{ height: 22 }} />
          <View style={[s.footerMetaRow, { borderColor: colors.border }]}>
            <Text style={[s.footerMeta, { color: colors.textMuted, fontFamily: FONT.mono }]}>
              ADMS // CLEARVIEW
            </Text>
            <View style={s.footerMetaRight}>
              <Activity size={11} color={colors.accent} />
              <Text style={[s.footerMeta, { color: colors.textMuted, fontFamily: FONT.mono }]}>
                v1.0 — LOCAL BUILD
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  // overline
  overline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tick: {
    width: 10,
    height: 2,
  },
  overlineCode: {
    fontSize: 10,
    letterSpacing: 1.5,
  },
  overlineLabel: {
    fontSize: 10,
    letterSpacing: 1.2,
  },

  // section header
  sectionHeader: {
    paddingHorizontal: 20,
    paddingTop: 36,
  },
  sectionTitle: {
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 1.5,
    marginTop: 14,
  },
  sectionSubtitle: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },

  // section wrapper
  section: {
    paddingBottom: 28,
  },

  sectionDivider: {
    height: 1,
    borderTopWidth: 1,
    marginHorizontal: 20,
    opacity: 0.85,
  },

  // hero
  hero: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 32,
    position: "relative",
  },
  heroGrid: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.35,
  },
  heroGridLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    opacity: 0.4,
  },
  heroStatic: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 1.5,
  },
  heroAccentBar: {
    height: 3,
    width: 56,
  },
  heroSub: {
    fontSize: 14,
    lineHeight: 22,
  },
  ctaRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 2,
  },
  primaryBtnFull: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  primaryBtnText: {
    fontSize: 12,
    letterSpacing: 2,
  },
  secondaryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 2,
  },
  secondaryBtnText: {
    fontSize: 12,
    letterSpacing: 2,
  },
  heroBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 2,
    gap: 10,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  heroBadgeDivider: {
    width: 1,
    height: 14,
  },
  heroBadgeText: {
    fontSize: 10,
    letterSpacing: 1.4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },

  // trades
  tradeCard: {
    flexDirection: "row",
    gap: 14,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 14,
    borderWidth: 1,
    borderLeftWidth: 3,
    borderRadius: 2,
  },
  tradeIconBox: {
    width: 44,
    height: 44,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  tradeTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  tradeCode: {
    fontSize: 10,
    letterSpacing: 1.4,
  },
  tradeTitle: {
    fontSize: 13,
    letterSpacing: 1.2,
  },
  tradeDesc: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  // big feature
  bigFeature: {
    marginHorizontal: 20,
    padding: 18,
    borderWidth: 1,
    borderRadius: 2,
  },
  bigFeatureHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bigFeatureCode: {
    fontSize: 10,
    letterSpacing: 1.4,
  },
  bigFeatureTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1.4,
    marginTop: 12,
  },
  bigFeatureDesc: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },

  // feature grid
  featureGrid: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  featureCard: {
    width: "48.5%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    minHeight: 138,
  },
  featureHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featureCode: {
    fontSize: 9,
    letterSpacing: 1.4,
  },
  featureTitle: {
    fontSize: 12,
    letterSpacing: 1.2,
    marginTop: 10,
  },
  featureDesc: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 8,
  },

  // stats
  statCard: {
    marginHorizontal: 20,
    marginTop: 12,
    padding: 18,
    borderWidth: 1,
    borderRadius: 2,
  },
  statHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statHeadText: {
    fontSize: 10,
    letterSpacing: 1.4,
  },
  statValue: {
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -1,
    marginTop: 6,
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: 1.6,
    marginTop: 4,
  },
  statDetail: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
  },

  // dashboard
  screenFrame: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 2,
    overflow: "hidden",
  },
  screenChrome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  chromeDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
  },
  chromeText: {
    fontSize: 10,
    letterSpacing: 1.2,
    marginLeft: 6,
  },
  screenImg: {
    width: "100%",
    aspectRatio: 16 / 10,
  },

  // footer
  footerCta: {
    marginTop: 24,
    marginHorizontal: 20,
    padding: 22,
    borderWidth: 1,
    borderRadius: 2,
  },
  footerTitle: {
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 1.5,
  },
  footerSub: {
    fontSize: 13,
    lineHeight: 20,
  },
  footerMetaRow: {
    borderTopWidth: 1,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerMetaRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerMeta: {
    fontSize: 10,
    letterSpacing: 1.4,
  },
});
